import { Html, Head, Main, NextScript } from "next/document";

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
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
      <!--Countly script-->
<script type='text/javascript' src='https://cdn.jsdelivr.net/npm/countly-sdk-web@latest/lib/countly.min.js'></script>
<script type='text/javascript'>

Countly.init({
// provide your app key that you retrieved from Countly dashboard
app_key: "a29b88fe47cb432798af0a4dc2e2c0946332696a",

// Provide your server IP or name.
// If you use your own server, make sure you have https enabled if you use
// https below.  
 url: "https://form.sh0von.me"

});
// track sessions automatically
Countly.track_sessions();
// track pageviews automatically
Countly.track_pageview();
</script>
    </Html>
  );
}
