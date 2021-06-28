import React, { useEffect } from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import CssBaseline from '@material-ui/core/CssBaseline';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    /* eslint-disable react/jsx-props-no-spreading */
    <>
      <CssBaseline />
      <Component {...pageProps} />
    </>
  );
};
export default MyApp;
