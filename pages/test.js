import Head from "next/head";
import styles from "../styles/Login.module.css";

export default function ForgetPassword() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bootstrap App Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <button className={styles.untouchableButton}>
          Catch me if you can!
        </button>
      </main>
    </div>
  );
}
