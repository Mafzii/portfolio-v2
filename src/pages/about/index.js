import Head from 'next/head';
import BaseLayout from '../../components/BaseLayout';

export default function About() {
  return (
    <BaseLayout>
      <Head>
        <title>About - Mustafa Afzal</title>
      </Head>
      <div className="max-w-3xl space-y-5">
        <p className="type-kicker">About</p>
        <h1 className="type-display text-5xl sm:text-6xl text-neutral-50">about me</h1>
        <p className="type-body">
          Hi, Im Mustafa Afzal.<br />
          Im a chill guy.<br />
          Welcome to my portfolio!
        </p>
      </div>
    </BaseLayout>
  );
}
