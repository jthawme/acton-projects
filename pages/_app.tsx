import { useEffect } from "react";
import "../styles/globals.scss";
import { registerBootlegVH } from "../utils/events";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    registerBootlegVH();
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
