import Head from "next/head";
import styles from "../styles/Login.module.css";
import Link from "next/link";
import { useCallback, useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onClickLogin = useCallback(() => {
    alert(`Hello! Your email is: "${email}" and password is: "${password}"`);
  }, [email, password]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Bootstrap App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Login</h1>
        <Link href="/"> Forgot your password? </Link>
        <div className={styles.form}>
          <div className={styles.inputWrapper}>
            <label>Email</label>
            <input
              placeholder="Enter your email address"
              type="email"
              value={email}
              onChange={onChangeEmail}
            />
          </div>
          <div className={styles.inputWrapper}>
            <label>Password</label>
            <input
              placeholder="Enter your password"
              type="password"
              value={password}
              onChange={onChangePassword}
            />
          </div>
          <div className={styles.actions}>
            <button className={styles.button} onClick={onClickLogin}>
              {" "}
              Login{" "}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
