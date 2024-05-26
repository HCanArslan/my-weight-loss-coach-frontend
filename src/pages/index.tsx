import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '@/components/Layout/Header';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Weight Loss Coach</title>
        <meta name="description" content="Personalized weight loss coaching" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <h1>Welcome to Weight Loss Coach</h1>
      </main>
    </div>
  );
};

export default Home;
