import Head from "next/head";
import styles from "../styles/Login.module.css";
import Link from "next/link";

export default function Register() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Register</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Register</h1>
        <Link href="/login"> Already have an account? Login here! </Link>
      </main>
    </div>
  );
}
