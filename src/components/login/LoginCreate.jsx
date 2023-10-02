import React, { useState } from "react";
import styles from "./LoginCreate.module.css";
import Input from "../forms/Input";
import useForm from "../../../Hooks/useForm";
import Button from "../forms/Button";
import logo from "../img/logo.png";
import entrar from "../img/icons/enter.png";
import Container from "../global/Container";
import { Link } from "react-router-dom";
import { USER_POST } from "../../../Api";
import useFetch from "../../../Hooks/useFetch";
import Error from "../utils/Error";
import CheckboxInput from "../forms/CheckboxInput";
import { UserContext } from "../../userContext";

const LoginCreate = () => {
  const { request, error, loading } = useFetch();
  const { userLogin } = React.useContext(UserContext);

  const username = useForm("");
  const email = useForm("email");
  const password = useForm("password");
  const [termos, setTermos] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    const termosValue = termos ? "Aceito os Termos" : "Não Aceito os Termos";
    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
      termos: termosValue,
    });
    const { response, json } = await request(url, options);
    if (response.ok) {
      userLogin(username.value, password.value);
    }
    console.log(json);
  }

  return (
    <div>
      {error && <Error error={error} />}
      <section className={`${styles.section} animeLeft`}>
        <img className={styles.logo} src={logo} alt="" />
        <Container>
          <div className={styles.entrarDiv}>
            <Link to={"/login"} className={styles.btnEntrar}>
              Acessar minha Conta <img src={entrar} alt="" />
            </Link>
          </div>

          <h1 className="titulo">Cadastre-se</h1>

          <form className={styles.form} onSubmit={handleSubmit}>
            <Input name="username" label="Usuário" type="text" {...username} />
            <Input name="email" label="Email" type="email" {...email} />
            <Input
              name="password"
              label="Senha"
              type="password"
              {...password}
            />

            <CheckboxInput
              checked={termos}
              onChange={() => setTermos(!termos)}
            />

            {loading ? (
              <Button disabled>Cadastrando...</Button>
            ) : (
              <Button>Cadastrar</Button>
            )}
          </form>
        </Container>
      </section>
    </div>
  );
};

export default LoginCreate;
