import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/layouts';
import { APP_NAME } from '../utils/constants';
import HeroSection from './section/hero/HeroSection';

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>{APP_NAME}</title>
        <meta name="description" content="url shortener" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="lg:mt-28 mt-14 max-w-7xl mx-auto">
        <HeroSection />
      </main>
    </Layout>
  );
};

export default Home;
