import "@/styles/globals.css";
import "@/styles/homepage.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <div className="z-10 wave-bg-anim" />
      <Component {...pageProps} />
    </>
  );
}
