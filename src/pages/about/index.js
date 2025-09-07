import Head from 'next/head';
import BaseLayout from '../../components/BaseLayout';

export default function About() {
  return (
    <BaseLayout>
      <Head>
        <title>About - Mustafa Afzal</title>
      </Head>
      <h1 className="text-4xl font-bold mb-4 text-neutral-200">about me</h1>
      <p className="text-lg text-gray-300 opacity-85">
        Hi, I'm Mustafa Afzal.<br />
        I'm a chill guy.<br />
        Welcome to my portfolio!
      </p>
    </BaseLayout>
  );
}
