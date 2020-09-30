import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>xmas-one</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Hello world</h1>

        <p className={styles.description}>
          This is a placeholder for{" "}
          <code className={styles.code}>xmas-one</code>
        </p>
      </main>
    </div>
  );
}
