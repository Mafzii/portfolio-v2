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
    return {
      slug,
      title: data.title,
      date: data.date,
    };
  });

  return { props: { posts } };
}

export default function Blog({ posts }) {
  return (
    <BaseLayout>
      <Head>
        <title>Blog - Mustafa Afzal</title>
      </Head>
      <h1 className="text-3xl font-bold mb-6 text-neutral-200">
        blog
      </h1>
      <ul className="space-y-4">
        {posts.map(post => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="blog-link inline-block underline py-4 text-neutral-100 rounded-lg transition-colors duration-200 hover:text-indigo-400 hover:underline w-auto"
            >
              <div className="flex flex-col">
                <span className="font-semibold">{post.title} - <span className="text-md mt-1">
                  {post.date}
                </span></span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </BaseLayout>
  );
}
