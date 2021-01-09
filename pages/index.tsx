import Head from "next/head";
import { Header } from "../components/Header";
import { AboutSection } from "../components/Sections/About";
import { Landing } from "../components/Sections/Landing";
import { SiteContainer } from "../components/SiteContext";
import styles from "../styles/pages/Home.module.scss";

export default function Home() {
  return (
    <SiteContainer>
      <div className={styles.container}>
        <Head>
          <title>Acton Projects</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap"
            rel="stylesheet"
          />
        </Head>

        <Header />

        <main className={styles.main}>
          <Landing />

          <AboutSection />
        </main>
      </div>
    </SiteContainer>
  );
}
