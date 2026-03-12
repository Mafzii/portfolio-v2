import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Head from 'next/head';
import Link from 'next/link';
import BaseLayout from '../../components/BaseLayout';

export async function getStaticProps() {
  const postsDir = path.join(process.cwd(), 'posts');
  const files = fs.readdirSync(postsDir);

  const posts = files.map(filename => {
    const slug = filename.replace('.md', '');
    const markdown = fs.readFileSync(path.join(postsDir, filename), 'utf-8');
    const { data } = matter(markdown);
    let formattedDate = data.date;
    if (data.date) {
      const d = new Date(data.date);
      const day = String(d.getDate()).padStart(2, '0');
      const month = String(d.getMonth() + 1).padStart(2, '0');
      const year = d.getFullYear();
      formattedDate = `${day}-${month}-${year}`;
    }
    return {
      slug,
      title: data.title,
      date: formattedDate,
      rawDate: data.date,
    };
  })
    .sort((a, b) => new Date(b.rawDate) - new Date(a.rawDate));

  return { props: { posts } };
}

export default function Blog({ posts }) {
  return (
    <BaseLayout additional="overflow-hidden">
      <Head>
        <title>Blog - Mustafa Afzal</title>
      </Head>
      <div className="flex flex-col h-full">
        <p className="type-kicker mb-3 flex-shrink-0">Writing</p>
        <h1 className="type-display text-5xl sm:text-6xl mb-6 flex-shrink-0 text-neutral-50">
          blog
        </h1>
        <ul className="flex-1 overflow-y-scroll pr-2">
          {posts.map(post => (
            <li className="m-0" key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="block py-5 px-5 rounded-2xl transition-colors duration-200 hover:bg-neutral-800/60 focus:bg-neutral-800/80"
              >
                <div className="flex flex-col gap-2">
                  <span className="type-nav text-2xl text-neutral-100 underline underline-offset-4">{post.title}</span>
                  <span className="type-meta">{post.date}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </BaseLayout>
  );
}
