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
        alt="Profile"
        className="z-10 fixed object-cover w-full h-full"
      />
      {/* <div className="z-10 wave-bg-anim" /> */}
      <Component {...pageProps} />
    </>
  );
}
