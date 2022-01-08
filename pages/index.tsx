import type { NextPage } from "next";
import Image from "next/image";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
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
            <h2>🔠 EAP &rarr;</h2>
            <p>Customizable ASCII art NFT on Polygon.</p>
          </a>

          <a
            href="http://cba.is/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h2>👀 CBA &rarr;</h2>
            <p>Monitor transfers btw EVM-compatible chains.</p>
          </a>

          <a
            href="https://drygin.xyz/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h2>🥃 DRYGIN &rarr;</h2>
            <p>Ginerate GEN.ART drops w/ custom hash.</p>
          </a>

          <a
            href="https://scar.pages.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h2>📡 SCAR &rarr;</h2>
            <p>An Arweave explorer deployed on Permaweb.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://rainbow.me/aliez.eth/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.logo}>
            <Image
              src="/rainbow.png"
              alt="Rainbow Logo"
              width={139 / 5}
              height={139 / 5}
            />
          </span>
        </a>
        <a
          href="https://orbis.club/profile/did:3:kjzl6cwe1jw145ano7retm9od9zw469abqdmr1xf9e98xfblrumuj4f0fw7l2il"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.logo}>
            <Image
              src="/orbis.png"
              alt="Orbis Logo"
              width={139 / 5}
              height={139 / 5}
            />
          </span>
        </a>
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
        <a
          href="https://github.com/renzholy/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.logo}>
            <Image
              src="/github.svg"
              alt="Github Logo"
              width={139 / 5}
              height={139 / 5}
            />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
