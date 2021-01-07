import Head from "next/head";
import styles from "../styles/pages/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Title</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>Hi</main>
    </div>
  );
}
