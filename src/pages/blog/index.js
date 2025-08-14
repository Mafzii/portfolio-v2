import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

export async function getStaticProps() {
  const files = fs.readdirSync('posts');

  const posts = files.map(filename => {
    const slug = filename.replace('.md', '');
    const markdown = fs.readFileSync(`posts/${filename}`, 'utf-8');
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
    <div>
      <h1>Blog</h1>
      <ul>
        {posts.map(post => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              {post.title} ({post.date})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
