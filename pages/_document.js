import { Html, Head, Main, NextScript } from "next/document";

const CountlyScript = `
  <script type="text/javascript">
    Countly.init({
      app_key: "a29b88fe47cb432798af0a4dc2e2c0946332696a",
      url: "https://svn-526c2451c3183.flex.countly.com/"
    });
    Countly.track_sessions();
    Countly.track_pageview();
  </script>
`;

export default function Document() {
    return (
      <Html lang="en">
        <Head>
          <title>Tuition Survey Form</title>
          <meta name="description" content="Survey form for tuition services in Bangladesh" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://tse4.mm.bing.net/th?id=OIG3.1fgFuX71zIVYjIQg_BhN&pid=ImgGn" />
          <meta property="og:title" content="Tuition Survey Form" />
          <meta property="og:description" content="Survey form for tuition services in Bangladesh" />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:image" content="https://tse4.mm.bing.net/th?id=OIG3.1fgFuX71zIVYjIQg_BhN&pid=ImgGn" />
          <meta property="twitter:title" content="Tuition Survey Form" />
          <meta property="twitter:description" content="Survey form for tuition services in Bangladesh" />
          {/* Inject Countly initialization script */}
          <script dangerouslySetInnerHTML={{ __html: CountlyScript }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
