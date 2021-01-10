import { useEffect } from "react";
import smoothscroll from "smoothscroll-polyfill";
import { registerBootlegVH } from "../utils/events";

import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    registerBootlegVH();
    smoothscroll.polyfill();
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
