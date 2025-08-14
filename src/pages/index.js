import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Hello, Im Mustafa</h1>
      <p>Welcome to my portfolio.</p>
      <Link href="/blog">Check out my blog →</Link>
    </div>
  );
}
