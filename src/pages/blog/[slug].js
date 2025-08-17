import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { useRouter } from 'next/router';
import Head from 'next/head';

export async function getStaticPaths() {
  const files = fs.readdirSync('posts');

  const paths = files.map(filename => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }));

  return {
    paths,
    fallback: false, // only build known posts
  };
}

export async function getStaticProps({ params }) {
  const markdown = fs.readFileSync(`posts/${params.slug}.md`, 'utf-8');
  const { data, content } = matter(markdown);

  const processed = await remark().use(html).process(content);
  const contentHtml = processed.toString();

  return {
    props: {
      title: data.title,
      date: data.date,
      contentHtml,
    },
  };
}

export default function Post({ title, date, contentHtml }) {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <>
      <Head>
        <title>{slug} - Blog - Mustafa Afzal</title>
      </Head>
      <div className="flex flex-col justify-center items-center min-h-screen bg-neutral-900 text-gray-100">
        <section className="bg-neutral-800 rounded-2xl shadow-lg px-10 py-10 max-w-lg w-full text-center">
          <h1 className="text-3xl font-bold mb-4 text-neutral-200">{slug}</h1>
          <p className="text-lg text-gray-300 opacity-85">
            Blog post content for <strong>{slug}</strong> goes here.
          </p>
        </section>
      </div>
    </>
  );
}
