import { ReactNode } from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

type Props = {
  children: ReactNode;
  title?: string;
  description?: string;
};

export default function Layout({
  children,
  title = 'Hüner Tesisat',
  description = "Eskişehir'de profesyonel tesisat hizmetleri",
}: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="tesisat, sıhhi tesisat, su tesisatı, Eskişehir tesisatçı, Hüner Tesisat"
        />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
