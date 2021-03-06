import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/layouts';
import { APP_NAME } from '../utils/index';
import FeatureSection from './section/features';
import HeroSection from './section/hero';
import UrlSection from './section/url';

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>{APP_NAME}</title>
        <meta name="description" content="url shortener" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className="lg:mt-10 mt-2 max-w-7xl mx-auto space-y-10"
        aria-labelledby="main content"
      >
        <HeroSection />
        <UrlSection />
        <FeatureSection />
      </main>
    </Layout>
  );
};

export default Home;
