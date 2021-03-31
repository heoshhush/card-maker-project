import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import Styles from './login.module.css';

const Login = ({ authService }) => {
  const onLogin = event => {
    authService //
      .login(event.currentTarget.textContent)
      .then(console.log);
  };
  return (
    <section className={Styles.login}>
      <Header />
      <section>
        <h1>Login</h1>
        <ul className={Styles.list}>
          <li className={Styles.item}>
            <button className={Styles.button} onClick={onLogin}>
              Google
            </button>
          </li>
          <li className={Styles.item}>
            <button className={Styles.button} onClick={onLogin}>
              Github
            </button>
          </li>
        </ul>
      </section>
      <Footer />
    </section>
  );
};

export default Login;
