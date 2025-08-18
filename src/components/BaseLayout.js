import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function BaseLayout({ children }) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <div className="relative w-screen h-screen flex flex-col sm:justify-center items-center bg-neutral-900 text-gray-100">
                <header className="z-10 sm:absolute top-0 left-0 w-screen flex justify-between items-center px-10 pt-8 box-border h-[15vh]">
                    <div className="flex items-center gap-2">
                        <Link href="/" passHref>
                            <div className="w-14 h-14 rounded-full bg-neutral-800 flex items-center justify-center shadow-md cursor-pointer overflow-hidden">
                                <Image
                                    src="/profile.png"
                                    width={56}
                                    height={56}
                                    alt="Profile"
                                    className="object-cover w-full h-full rounded-full"
                                />
                            </div>
                        </Link>
                        <div className="flex flex-col items-center gap-2 mt-2">
                                                        <a href="https://github.com/Mafzii" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center bg-neutral-800 rounded-full shadow hover:bg-neutral-500 transition-colors">
                                                                {/* GitHub filled icon */}
                                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-neutral-300">
                                                                    <path d="M12 2C6.477 2 2 6.484 2 12.012c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.833.091-.646.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.254-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.338 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.396.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.579.688.481C19.138 20.175 22 16.427 22 12.012 22 6.484 17.523 2 12 2z"/>
                                                                </svg>
                            </a>
                            <a href="https://x.com/Mafziii" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center bg-neutral-800 rounded-full shadow hover:bg-neutral-500 transition-colors">
                                {/* X (Twitter) icon */}
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-300"><path d="M17.53 7.477L13.004 12l4.526 4.523a.75.75 0 0 1-1.06 1.06L12 13.061l-4.47 4.522a.75.75 0 0 1-1.06-1.06L10.939 12 6.47 7.477a.75.75 0 1 1 1.06-1.06L12 10.939l4.47-4.522a.75.75 0 1 1 1.06 1.06z" /></svg>
                            </a>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <Link href="/about">
                            <div className="text-neutral-400 bg-neutral-800 rounded-lg px-5 py-2 font-medium text-[1.05rem] shadow-md transition-colors duration-200 hover:bg-neutral-500 hover:text-white">About</div>
                        </Link>
                        <Link href="/blog">
                            <div className="text-neutral-400 bg-neutral-800 rounded-lg px-5 py-2 font-medium text-[1.05rem] shadow-md transition-colors duration-200 hover:bg-neutral-500 hover:text-white">Blog</div>
                        </Link>
                    </div>
                </header>
                <section className="z-10 bg-neutral-800 sm:rounded-2xl shadow-lg px-14 py-10 min-w-full sm:min-w-[60vw] min-h-[85vh] sm:min-h-[60vh] mt-8 sm:mt-0">
                    {children}
                </section>
            </div>
        </>
    );
}
