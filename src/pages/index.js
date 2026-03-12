import Head from 'next/head';
import BaseLayout from '../components/BaseLayout';

export default function Home() {
  return (
    <BaseLayout>
      <Head>
        <title>Mustafa Afzal</title>
      </Head>
      <div className="max-w-3xl space-y-6">
        <p className="type-kicker">Mustafa Afzal</p>
        <h1 className="type-display text-5xl sm:text-7xl text-neutral-50">hello there</h1>
        <p className="type-lead">
          Welcome to my portfolio.<br />Frontend developer, designer, and creator.
          <br /><br />I have worked on a bunch of interesting projects—scroll down to see more!<br /><br />I have worked on a bunch of interesting projects—scroll down to see more!<br /><br />I have worked on a bunch of interesting projects—scroll down to see more!<br /><br />I have worked on a bunch of interesting projects—scroll down to see more!
        </p>
      </div>
    </BaseLayout>
  );
}
