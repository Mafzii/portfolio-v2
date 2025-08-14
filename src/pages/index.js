import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>Mustafa Afzal</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="relative w-screen h-screen flex flex-col justify-center items-center bg-neutral-900 text-gray-100">
        <div className="wave-bg-anim" />
        <header className="z-10 absolute top-0 left-0 w-screen flex justify-between items-center px-10 pt-8 box-border">
          <div className="w-14 h-14 rounded-full bg-neutral-800 flex items-center justify-center shadow-md">
            {/* Placeholder profile icon */}
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="18" cy="18" r="18" fill="#1e293b" />
              <circle cx="18" cy="14" r="6" fill="#818cf8" />
              <ellipse cx="18" cy="26" rx="8" ry="5" fill="#818cf8" opacity="0.2" />
            </svg>
          </div>
          <Link href="/blog" className="text-neutral-400 bg-neutral-800  rounded-lg px-5 py-2 font-medium no-underline text-[1.05rem] shadow-md transition-colors duration-200 hover:bg-indigo-500 hover:text-white">
            Blog
          </Link>
        </header>
        <section className="z-10 bg-neutral-800 rounded-2xl shadow-lg px-14 py-10 max-w-md text-center mt-10">
          <h1 className="text-4xl font-bold mb-4 tracking-tight text-neutral-200">Hello, I'm Mustafa</h1>
          <p className="text-lg mb-8 text-gray-300 opacity-85">Welcome to my portfolio.<br />Frontend developer, designer, and creator.</p>
        </section>
      </div>
    </>
  );
}
