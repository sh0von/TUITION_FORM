import { useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import '@/styles/globals.css';
import { Countly } from 'countly-sdk-web';

function MyApp({ Component, pageProps }) {
  // Initialize Countly on component mount
  useEffect(() => {
    // Initialize Countly
    Countly.init({
      app_key: 'a29b88fe47cb432798af0a4dc2e2c0946332696a',
      url: 'https://svn-526c2451c3183.flex.countly.com/',
      debug: true, // Optional, enables debug mode
    });

    // Start tracking sessions
    Countly.begin_session();

    // Track page views
    Countly.track_pageview();

    // Clean up Countly instance on component unmount
    return () => {
      Countly.stop();
    };
  }, []);

  return (
    <>
      <Analytics />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
