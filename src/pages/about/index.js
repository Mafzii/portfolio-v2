import Head from 'next/head';
import BaseLayout from '../../components/BaseLayout';

export default function About() {
  return (
    <BaseLayout>
      <Head>
        <title>About - Mustafa Afzal</title>
      </Head>
      <h1 className="text-4xl font-bold mb-4">about me</h1>
      <p className="text-lg opacity-85">
        Hi, Im Mustafa Afzal.<br />
        Im a chill guy.<br />
        Welcome to my portfolio!
      </p>
    </BaseLayout>
  );
}
