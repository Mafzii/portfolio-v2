import Head from 'next/head';
import BaseLayout from '../components/BaseLayout';

export default function Home() {
  return (
    <BaseLayout>
      <Head>
        <title>Mustafa Afzal</title>
      </Head>
      <h1 className="text-4xl font-bold mb-4 tracking-tight text-neutral-200">hello there</h1>
      <p className="text-lg mb-8 text-gray-300 opacity-85">
        Welcome to my portfolio.<br />Frontend developer, designer, and creator.
        <br /><br />I have worked on a bunch of interesting projects—scroll down to see more!<br /><br />I have worked on a bunch of interesting projects—scroll down to see more!<br /><br />I have worked on a bunch of interesting projects—scroll down to see more!<br /><br />I have worked on a bunch of interesting projects—scroll down to see more!
      </p>
    </BaseLayout>
  );
}
