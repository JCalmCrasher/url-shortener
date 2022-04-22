import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/layouts';

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>jxly</title>
        <meta name="description" content="url shortener" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main></main>
    </Layout>
  );
};

export default Home;
