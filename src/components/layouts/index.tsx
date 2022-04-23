import Head from 'next/head';
import { ReactNode } from 'react';
import TheFooter from './footer';
import Theheader from './header';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>url-shortener</title>
      </Head>
      <Theheader />
      <main>{children}</main>
      <TheFooter />
    </>
  );
}
