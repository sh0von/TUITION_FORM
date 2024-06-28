import { useEffect } from 'react';
import '@/styles/globals.css'; // Import your global styles here
import Countly from 'countly-sdk-web'; // Assuming countly-sdk-web is installed via npm/yarn

function App({ Component, pageProps }) {
  useEffect(() => {
    // Countly initialization
    Countly.init({
      app_key: 'a29b88fe47cb432798af0a4dc2e2c0946332696a',
      url: 'https://svn-526c2451c3183.flex.countly.com',
      debug: true, // Set to false in production
    });

    // Track events or behaviors as needed
    Countly.track_sessions();
    Countly.track_pageview();
    Countly.track_clicks();
    Countly.track_scrolls();
    Countly.track_errors();
    Countly.track_links();
    Countly.track_forms();
    Countly.collect_from_forms();
  }, []);

  return <Component {...pageProps} />;
}

export default App;
