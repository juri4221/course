import Head from "next/head";
import styles from "../styles/Login.module.css";
import Link from "next/link";
import { useCallback, useState } from "react";

export default function Register() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const onChangeName = (event) => {
    setName(event.target.value);
  };
  const onChangeSurname = (event) => {
    setSurname(event.target.value);
  };
  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };
  const onChangePasswordConfirm = (event) => {
    setPasswordConfirm(event.target.value);
  };

  const onClickRegister = useCallback(() => {
    if (password === passwordConfirm) {
      alert(
        `Hello! Your name is: "${name} ${surname}", your email is "${email}", your password is "${password}", your password confirm is "${passwordConfirm}".`
      );
    } else {
      alert(`Hello! Your passwords didn't match!`);
    }
  }, [email, name, password, passwordConfirm, surname]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Register</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Register</h1>
        <div className={styles.form}>
          <div className={styles.inputWrapper}>
            <label>Name</label>
            <input
              placeholder="Enter your name"
              type="text"
              value={name}
              onChange={onChangeName}
            />
          </div>
          <div className={styles.inputWrapper}>
            <label>Surname</label>
            <input
              placeholder="Enter your Surname"
              type="text"
              value={surname}
              onChange={onChangeSurname}
            />
          </div>
          <div className={styles.inputWrapper}>
            <label>Email</label>
            <input
              placeholder="Enter your email"
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
          <div className={styles.inputWrapper}>
            <input
              placeholder="Confirm the password"
              type="password"
              value={passwordConfirm}
              onChange={onChangePasswordConfirm}
            />
          </div>

          <div className={styles.actions}>
            {/*<button className={styles.button} onClick={onClickLogin}>*/}
            <button className={styles.button} onClick={onClickRegister}>
              Register
            </button>
          </div>
        </div>
        <Link href="/login"> Already have an account? Login here! </Link>
      </main>
    </div>
  );
}
