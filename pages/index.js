import Head from "next/head";
import styles from "../styles/Login.module.css";
import ActiveLink from "../components/ActiveLink";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bootstrap App Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <ActiveLink href="/login"> Go to login? </ActiveLink>
        <ActiveLink href="/register"> Register? </ActiveLink>
      </main>
    </div>
  );
}
