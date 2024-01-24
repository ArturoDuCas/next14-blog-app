import React from 'react';
import {handleGithubLogin } from "@/lib/actions";
import LoginForm from "@/components/loginForm/loginForm";
import styles from "./login.module.css";

const LoginPage = () => {

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <LoginForm />
          <form action={handleGithubLogin}>
            <button className={styles.github}>Login with Github</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;