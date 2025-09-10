import fs from 'fs';
import matter from 'gray-matter';
import { useRouter } from 'next/router';
import Head from 'next/head';
import BaseLayout from '@/components/BaseLayout';
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import styles from '@/styles/markdown.module.css';
import remarkHighlightjs from 'remark-highlight.js';
import 'highlight.js/styles/atom-one-dark.css';
import { useState } from 'react';

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
  const [fullScreen, setFullScreen] = useState(false);

  const pageContent = (
    <>
      <Head>
        <title>{title} - Blog - Mustafa Afzal</title>
      </Head>
      <div className="relative">
        <button
          onClick={() => setFullScreen(f => !f)}
          className="sticky top-1 right-0 float-right z-50 bg-neutral-800 hover:bg-neutral-500 rounded-full p-2 shadow transition-colors"
          type="button"
        >
          {fullScreen ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.7071 3.70711L16.4142 9H20C20.5523 9 21 9.44772 21 10C21 10.5523 20.5523 11 20 11H14.0007L13.997 11C13.743 10.9992 13.4892 10.9023 13.295 10.7092L13.2908 10.705C13.196 10.6096 13.1243 10.4999 13.0759 10.3828C13.0273 10.2657 13.0004 10.1375 13 10.003L13 10V4C13 3.44772 13.4477 3 14 3C14.5523 3 15 3.44772 15 4V7.58579L20.2929 2.29289C20.6834 1.90237 21.3166 1.90237 21.7071 2.29289C22.0976 2.68342 22.0976 3.31658 21.7071 3.70711Z" fill="#ffffff" />
              <path d="M9 20C9 20.5523 9.44772 21 10 21C10.5523 21 11 20.5523 11 20V14.0007C11 13.9997 11 13.998 11 13.997C10.9992 13.7231 10.8883 13.4752 10.7092 13.295C10.7078 13.2936 10.7064 13.2922 10.705 13.2908C10.6096 13.196 10.4999 13.1243 10.3828 13.0759C10.2657 13.0273 10.1375 13.0004 10.003 13C10.002 13 10.001 13 10 13H4C3.44772 13 3 13.4477 3 14C3 14.5523 3.44772 15 4 15H7.58579L2.29289 20.2929C1.90237 20.6834 1.90237 21.3166 2.29289 21.7071C2.68342 22.0976 3.31658 22.0976 3.70711 21.7071L9 16.4142V20Z" fill="#ffffff" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.7092 2.29502C21.8041 2.3904 21.8757 2.50014 21.9241 2.61722C21.9727 2.73425 21.9996 2.8625 22 2.997L22 3V9C22 9.55228 21.5523 10 21 10C20.4477 10 20 9.55228 20 9V5.41421L14.7071 10.7071C14.3166 11.0976 13.6834 11.0976 13.2929 10.7071C12.9024 10.3166 12.9024 9.68342 13.2929 9.29289L18.5858 4H15C14.4477 4 14 3.55228 14 3C14 2.44772 14.4477 2 15 2H20.9998C21.2749 2 21.5242 2.11106 21.705 2.29078L21.7092 2.29502Z" fill="#fff" />
              <path d="M10.7071 14.7071L5.41421 20H9C9.55228 20 10 20.4477 10 21C10 21.5523 9.55228 22 9 22H3.00069L2.997 22C2.74301 21.9992 2.48924 21.9023 2.29502 21.7092L2.29078 21.705C2.19595 21.6096 2.12432 21.4999 2.07588 21.3828C2.02699 21.2649 2 21.1356 2 21V15C2 14.4477 2.44772 14 3 14C3.55228 14 4 14.4477 4 15V18.5858L9.29289 13.2929C9.68342 12.9024 10.3166 12.9024 10.7071 13.2929C11.0976 13.6834 11.0976 14.3166 10.7071 14.7071Z" fill="#fff" />
            </svg>
          )}
        </button>
        <h1 className="text-4xl font-bold mb-4 text-neutral-50">{title || slug}</h1>
        <div className={styles["markdown-body"]}>
          <ReactMarkdown
            children={content}
            remarkPlugins={[remarkGfm, remarkHighlightjs]}
            components={{
              a: ({node, ...props}) => (
                <a {...props} target="_blank" rel="noopener noreferrer">{props.children}</a>
              )
            }}
          />
        </div>
      </div>
    </>
  )

  return fullScreen ? (
    <div className="fixed z-10 bg-neutral-800/60 backdrop-blur-sm shadow-lg p-10 max-w-full min-w-full h-full overflow-scroll text-wrap">
      {pageContent}
    </div>
  ) : (
    <BaseLayout>
      {pageContent}
    </BaseLayout>
  );
}
