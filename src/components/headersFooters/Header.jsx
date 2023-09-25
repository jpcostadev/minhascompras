import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import services from "../../assets/img/icons/services.png";
import Container from "../global/Container";
import { UserContext } from "../../userContext";

const Header = () => {
  const { data, userLogout } = React.useContext(UserContext);

  return (
    <header className={styles.headerBg}>
      <Container>
        <nav className={`${styles.nav}`}>
          <Link to={"/"}>
            <img className={styles.logo} src={logo} alt="" />
          </Link>

          {data ? (
            <Link className={`${styles.login}`} to={"/conta"}>
              {data.nome ? data.nome : data.username}
              <img className={styles.config} src={services} alt="" />
              <button onClick={userLogout}>Sair</button>
            </Link>
          ) : (
            <Link className={`${styles.login}`} to={"/login"}>
              Login /Criar
            </Link>
          )}
        </nav>
      </Container>
    </header>
  );
};

export default Header;
