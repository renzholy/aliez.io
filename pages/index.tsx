import { css } from "@emotion/css";
import type { NextPage } from "next";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div>
      <main
        className={css`
          min-height: 100vh;
          padding: 4rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        `}
      >
        <h1
          className={css`
            margin: 0;
            line-height: 1.15;
            font-size: 4rem;
            text-align: center;
          `}
        >
          A.L.I.E.Z
        </h1>
        <p
          className={css`
            margin: 4rem 0;
            line-height: 1.5;
            font-size: 1.5rem;
            text-align: center;
          `}
        >
          <code
            className={css`
              background: #fafafa;
              border-radius: 5px;
              padding: 0.75rem;
              font-size: 1.1rem;
              font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
                DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New,
                monospace;
            `}
          >
            a naive developer
          </code>
        </p>
        <div
          className={css`
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            max-width: 800px;

            @media (max-width: 600px) {
              & {
                padding: 0 1rem;
                width: 100%;
                flex-direction: column;
              }
            }

            > a {
              background: #fafafa;
              margin: 1rem;
              padding: 1.5rem;
              text-align: left;
              color: inherit;
              text-decoration: none;
              border: 1px solid #eaeaea;
              border-radius: 10px;
              transition: color 0.15s ease, border-color 0.15s ease;
              width: calc(300px - 2rem);

              @media (max-width: 600px) {
                & {
                  width: calc(100% - 2rem);
                }
              }

              :hover,
              :focus,
              :active {
                color: #0070f3;
                border-color: #0070f3;
              }

              > h2 {
                margin: 0 0 1rem 0;
                font-size: 1.5rem;
              }

              > p {
                color: gray;
                margin: 0;
                font-size: 1.25rem;
                line-height: 1.5;
              }
            }
          `}
        >
          <a href="http://eap.wtf/" target="_blank" rel="noopener noreferrer">
            <h2>🔠 EAP &rarr;</h2>
            <p>Customizable ASCII art NFT on Polygon.</p>
          </a>

          <a href="http://cba.is/" target="_blank" rel="noopener noreferrer">
            <h2>👀 CBA &rarr;</h2>
            <p>Monitor transfers btw EVM-compatible chains.</p>
          </a>

          <a
            href="https://drygin.xyz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>🥃 DRYGIN &rarr;</h2>
            <p>Ginerate GEN.ART drops w/ custom hash.</p>
          </a>

          <a
            href="https://scar.pages.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>📡 SCAR &rarr;</h2>
            <p>An Arweave explorer deployed on Permaweb.</p>
          </a>
        </div>
      </main>

      <footer
        className={css`
          background: #fafafa;
          display: flex;
          flex: 1;
          padding: 2rem 0;
          border-top: 1px solid #eaeaea;
          justify-content: center;
          align-items: center;

          > a {
            line-height: 0;

            > span {
              margin: 0 1.5rem;
            }
          }
        `}
      >
        <a
          href="https://rainbow.me/aliez.eth/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>
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
          <span>
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
          <span>
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
          <span>
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
