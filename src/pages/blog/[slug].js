import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

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
  return (
    <div>
      <h1>{title}</h1>
      <p>{date}</p>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </div>
  );
}
