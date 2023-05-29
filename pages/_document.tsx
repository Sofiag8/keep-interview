import { Html, Head, Main, NextScript } from "next/document";
import "../utils/fetch-polyfill";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.simplecss.org/simple.min.css"
        />
      </Head>
      <body style={{ marginBottom: "2rem" }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
