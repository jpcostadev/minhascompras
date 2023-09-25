import React from "react";
import styles from "./Login.module.css";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginForm from "./LoginForm";
import LoginCreate from "./LoginCreate";
import PasswordReset from "./PasswordReset";
import PasswordLost from "./PasswordLost";
import { UserContext } from "../../userContext";
import Error from "../utils/Error";

const Login = () => {
  const { login, error } = React.useContext(UserContext);

  if (login === true) return <Navigate to={"/conta"} />;

  return (
    <section className={styles.login}>
      {error && <Error error={error} />}

      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="criar" element={<LoginCreate />} />
          <Route path="perdeu" element={<PasswordLost />} />
          <Route path="resetar" element={<PasswordReset />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;
