import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>A.L.I.E.Z</title>
        <meta name="description" content="A-Z Looser-Krankheit-Was IS das?" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>A.L.I.E.Z</h1>

        <p className={styles.description}>
          <code className={styles.code}>a naive developer</code>
        </p>

        <div className={styles.grid}>
          <a
            href="http://eap.wtf/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h2>EAP &rarr;</h2>
            <p>User created ascii art NFT on polygon.</p>
          </a>

          <a
            href="http://cba.is/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h2>CBA &rarr;</h2>
            <p>Monitor cross-chain transfer activities.</p>
          </a>

          <a
            href="https://drygin.xyz/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h2>DRYGIN &rarr;</h2>
            <p>Generate GEN.ART drops with custom feeds.</p>
          </a>

          <a
            href="https://scar.pages.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h2>SCAR &rarr;</h2>
            <p>An arweave explorer fully onchain.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://twitter.com/aliez_eth"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.logo}>
            <Image
              src="/twitter.svg"
              alt="Twitter Logo"
              width={172 / 5}
              height={139 / 5}
            />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
