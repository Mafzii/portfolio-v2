import fs from 'fs';
import matter from 'gray-matter';
import { useRouter } from 'next/router';
import Head from 'next/head';
import BaseLayout from '@/components/BaseLayout';
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import styles from '@/styles/markdown.module.css';
import remarkHighlightjs from 'remark-highlight.js';
import 'highlight.js/styles/atom-one-dark.css';

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

  return {
    props: {
      title: data.title,
      date: data.date,
      content,
    },
  };
}

export default function Post({ title, date, content }) {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <BaseLayout>
      <Head>
        <title>{title} - Blog - Mustafa Afzal</title>
      </Head>
      <h1 className="text-4xl font-bold mb-4">{title || slug}</h1>
      <div className={styles["markdown-body"]}>
        <ReactMarkdown children={content} remarkPlugins={[remarkGfm, remarkHighlightjs]} />
      </div>
    </BaseLayout>
  );
}
