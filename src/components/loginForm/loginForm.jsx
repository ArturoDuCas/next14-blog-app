"use client";

import React, {useEffect} from 'react';
import { useFormState } from "react-dom";
import styles from './loginForm.module.css';
import { login } from "@/lib/actions";
import {useRouter} from "next/navigation";
import Link from "next/link";

const LoginForm = () => {
  const [state, formAction] = useFormState(login, undefined);
  const router = useRouter();

  useEffect(() => {
    state?.success && router.push("/login");
  }, [state?.success, router]);

  return (
    <form className={styles.form} action={formAction}>
      <input type="text" placeholder="Username" name="username"/>
      <input type="password" placeholder="Password" name="password"/>
      <button>Login</button>
      {state?.error}
      <Link className={styles.register} href="/register">
        <span>
          Don't have an account?
        </span>
        <b >
          Register
        </b>
      </Link>
    </form>

  );
};

export default LoginForm;