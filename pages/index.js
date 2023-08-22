import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p> Your next Sr. CSM. I bring 11 years of tech space industry experience- including 4 years of Customer Success, 8 years of Sales, 3 in leadership, and even completed a Full-Stack Web Development bootcamp. </p>
        <p>
          For more details on my background, check out my {' '}
          <a href="https://www.linkedin.com/in/dannielzelaya/">LinkedIn page </a>.
        </p>
        <p>Please hire me as your next CSM, I promise to work my hardest. You won't regret it :) </p>
      </section>
    </Layout>
  );
}