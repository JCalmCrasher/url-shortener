import Head from 'next/head';
import { ReactNode } from 'react';
import TheFooter from './footer';
import TheHeader from './header';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>url-shortener</title>
      </Head>
      <TheHeader />
      <main>{children}</main>
      <TheFooter />
    </>
  );
}
