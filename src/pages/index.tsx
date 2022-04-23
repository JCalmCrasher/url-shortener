import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/layouts';
import { APP_NAME } from '../utils/constants';
import HeroSection from './section/hero/HeroSection';
import UrlSection from './section/url/UrlSection';

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>{APP_NAME}</title>
        <meta name="description" content="url shortener" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className="lg:mt-20 mt-14 max-w-7xl mx-auto space-y-8"
        aria-labelledby="main content"
      >
        <HeroSection />
        <UrlSection />
      </main>
    </Layout>
  );
};

export default Home;
