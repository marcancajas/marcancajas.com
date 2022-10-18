import React, {useEffect} from "react";
import Head from "next/head";
import "../styles/globals.css";
import "../node_modules/wowjs/css/libs/animate.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if(typeof window !== 'undefined') {
      window.WOW = require('wowjs');
      }  
    new WOW.WOW().init();
  });
  return (
    <>
      <Head>
        {/* <!-- Google Fonts --> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={true} />
        <link href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
        {/* <!-- /Google Fonts --> */}
        <link rel="icon" href="img/favicon.png" />
        <meta name="description" content="personal portfolio react template" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
        <script src="https://smtpjs.com/v3/smtp.js"></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
