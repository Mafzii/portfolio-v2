import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { basePath } from '../utils/constants';

export default function BaseLayout({ children, additional }) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <div className="relative w-screen h-screen flex flex-col sm:justify-center items-center bg-neutral-900 text-gray-100">
                <header className="z-10 top-0 left-0 w-screen flex justify-between items-center box-border h-[20vh] max-h-[20vh] sm:max-h-full p-6 sm:p-10">
                    <div className="flex items-center gap-2">
                        <Link href="/" passHref>
                            <div className="w-14 h-14 rounded-full bg-neutral-800 flex items-center justify-center shadow-md cursor-pointer overflow-hidden">
                                <Image
                                    src={`${basePath}/profile.png`}
                                    width={56}
                                    height={56}
                                    alt="Profile"
                                    className="object-cover w-full h-full rounded-full"
                                />
                            </div>
                        </Link>
                        <div className="flex flex-col items-center gap-2">
                            <a href="https://github.com/Mafzii" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center bg-neutral-800 rounded-full shadow hover:bg-neutral-500 transition-colors">
                                {/* GitHub filled icon */}
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-neutral-300">
                                    <path d="M12 2C6.477 2 2 6.484 2 12.012c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.833.091-.646.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.254-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.338 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.396.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.579.688.481C19.138 20.175 22 16.427 22 12.012 22 6.484 17.523 2 12 2z" />
                                </svg>
                            </a>
                            <a href="https://www.linkedin.com/in/mustafa-afzal/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center bg-neutral-800 rounded-full shadow hover:bg-neutral-500 transition-colors">
                                {/* LinkedIn icon */}
                                <svg width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <Link href="/projects">
                            <div className="bg-neutral-800 rounded-lg px-5 py-2 font-medium text-[1.05rem] shadow-md transition-colors duration-200 hover:bg-neutral-500 hover:text-white">Projects</div>
                        </Link>
                        <Link href="/blog">
                            <div className="bg-neutral-800 rounded-lg px-5 py-2 font-medium text-[1.05rem] shadow-md transition-colors duration-200 hover:bg-neutral-500 hover:text-white">Blog</div>
                        </Link>
                    </div>
                </header>
                <section className={`z-10 bottom-0 right-0 bg-neutral-800/60 backdrop-blur-sm sm:rounded-2xl shadow-lg p-10 max-w-full min-w-full h-full sm:min-h-[65vh] sm:mb-[15vh] sm:min-w-[70vw] sm:max-w-[70vw] overflow-scroll text-wrap ${additional}`}>
                    {children}
                </section>
            </div>
        </>
    );
}
