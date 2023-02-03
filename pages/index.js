import Button from '../components/button';
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Link from 'next/Link';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home="true" >
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Button text="SWAPI Characters" type="button"></Button>
      <section className={utilStyles.headingMd}>
        <p>This is a NEXT.JS SWAPI Character App to practice using the framework. It is built using the following features:</p>
        <ul className={utilStyles.list}>
          <li className={utilStyles.listItem}>Static Generation with Data (using <Link href="https://swapi.dev/">SWAPI</Link>)</li>
          <li className={utilStyles.listItem}>CSS Modules</li>
        </ul>
      </section>
    </Layout>
  );
}