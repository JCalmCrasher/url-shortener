import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/layouts';
import { APP_NAME } from 'src/variables/general';
import FeatureSection from '../components/section/features';
import HeroSection from '../components/section/hero';
import UrlSection from '../components/section/url';

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
