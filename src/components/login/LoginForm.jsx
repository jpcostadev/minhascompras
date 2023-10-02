import React from "react";
import { Link, json } from "react-router-dom";
import styles from "./LoginForm.module.css";
import Input from "../forms/Input";
import Container from "../global/Container";
import Button from "../forms/Button";
import useForm from "../../../Hooks/useForm";
import { UserContext } from "../../userContext";
import logo from "../img/logo.png";
import useMedia from "../../../Hooks/useMedia";

const LoginForm = () => {
  const { userLogin, error, loading } = React.useContext(UserContext);
  const mobile = useMedia("(max-width: 800px)");

  const username = useForm("");
  const password = useForm("");

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className={`${styles.section} animeLeft`}>
      <img className={styles.logo} src={logo} alt="" />

      <Container>
        <h1 className="titulo">Login</h1>

        <form className={`${styles.form}`} onSubmit={handleSubmit}>
          <Input name="username" label="Usuário/Email" {...username} />

          <Input name="password" type="password" label="Senha" {...password} />

          {loading ? (
            <Button disabled>Carregando...</Button>
          ) : (
            <Button>Entrar</Button>
          )}
          {error && <p className="error">{error}</p>}
        </form>
        <Link className={styles.perdeu} to={"/login/perdeu"}>
          Esqueceu a Senha?
        </Link>

        <div className={styles.cadastro}>
          <h2 className="subtitulo">Cadastro</h2>

          <p>Ainda não possui conta? Cadastre-se grátis</p>

          <Link className={styles.btnCriar} to="/login/criar">
            Cadastro
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default LoginForm;
