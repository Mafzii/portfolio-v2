import "@/styles/globals.css";
import "@/styles/homepage.css";
import Image from 'next/image';
import { basePath } from '../utils/constants';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Image
        src={`${basePath}/backdrop.jpg`}
        width={1920}
        height={1080}
        alt="Background Image"
        className="z-10 fixed object-cover top-auto w-full min-h-screen max-h-screen pointer-events-none"
      />
      {/* <div className="z-10 wave-bg-anim" /> */}
      <Component {...pageProps} />
    </>
  );
}
