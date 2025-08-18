import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" type="image/png" href="/profile.png" />
        {/* FontPair: Clash Display & Space Grotesk */}
        <link href="https://fonts.googleapis.com/css2?family=Clash+Display:wght@700&family=Space+Grotesk:wght@400;500;700&family=Fira+Mono:wght@400&display=swap" rel="stylesheet" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
