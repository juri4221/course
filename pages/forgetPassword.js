import Head from "next/head";
import styles from "../styles/ForgetPassword.module.css";

export default function ForgetPassword() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bootstrap App Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.div1}>
          <div className={styles.div11}>Div 1.1</div>
          <div className={styles.div12}>Div 1.2</div>
          <div className={styles.div13}>Div 1.3</div>
          <div className={styles.div14}>Div 1.4</div>
        </div>
        <div className={styles.div2}>Div 2</div>
        <div className={styles.div3}>Div 3</div>
        <div className={styles.div4}>Div 4</div>
      </main>
    </div>
  );
}
