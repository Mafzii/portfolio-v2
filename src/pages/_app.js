import "@/styles/globals.css";
import "@/styles/homepage.css";
import Image from 'next/image';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Image
        src="/backdrop.jpg"
        width={56}
        height={56}
        alt="Background Image"
        className="z-10 fixed bottom-0 top-auto w-full h-full pointer-events-none"
      />
      {/* <div className="z-10 wave-bg-anim" /> */}
      <Component {...pageProps} />
    </>
  );
}
