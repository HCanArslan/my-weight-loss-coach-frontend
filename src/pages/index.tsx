import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Weight Loss Coach</title>
        <meta name="description" content="Personalized weight loss coaching" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center my-8">Welcome to Weight Loss Coach</h1>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
