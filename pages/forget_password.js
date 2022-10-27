import Head from "next/head";
import styles from "../styles/ForgetPassword.module.css";

export default function ForgetPassword() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bootstrap App Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>Main</main>
    </div>
  );
}
