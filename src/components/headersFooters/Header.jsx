import React from "react";
import styles from "./Header.module.css";
import stylesMobile from "./HeaderMobile.module.css";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../img/logo.png";
import services from "../img/icons/services.png";
import verificado from "../img/icons/verificado.svg";
import Container from "../global/Container";
import { UserContext } from "../../userContext";
import useMedia from "../../../Hooks/useMedia";

const Header = () => {
  const mobile = useMedia("(max-width:800px)");
  const { data, userLogout } = React.useContext(UserContext);
  const [menuMobile, setMenuMobile] = React.useState(false);

  const { pathname } = useLocation();
  React.useEffect(() => {
    setMenuMobile(false);
  }, [pathname]);

  return (
    <>
      {mobile ? (
        <header className={stylesMobile.header}>
          <div className={stylesMobile.menu}>
            <button
              onClick={() => setMenuMobile(!menuMobile)}
              className={`${stylesMobile.btnMobile} ${
                menuMobile && stylesMobile.btnMobileActive
              } `}
            >
              <span
                className={`${stylesMobile.hamburger} ${
                  menuMobile && stylesMobile.hamburgerActive
                }`}
              ></span>
            </button>

            <Link to={"/"}>
              <img className={stylesMobile.logo} src={logo} alt="" />
            </Link>
          </div>

          <nav
            className={`${stylesMobile.nav} ${
              menuMobile && stylesMobile.navActive
            }`}
          >
            <ul
              className={`${stylesMobile.ul}  ${
                menuMobile && stylesMobile.ulActive
              }`}
            >
              <li>
                <div className={stylesMobile.dados}>
                  {data ? (
                    <div>
                      <Link to={"/painel"}>Painel</Link>

                      <Link className={`${styles.login}`} to={"/conta"}>
                        {data.nome ? data.nome : data.username}
                        <img className={styles.config} src={services} alt="" />
                        <button onClick={userLogout}>Sair</button>
                      </Link>
                    </div>
                  ) : (
                    <Link className={`${styles.login}`} to={"/login"}>
                      Login /Criar
                    </Link>
                  )}
                </div>
              </li>
              <li>
                <div className={stylesMobile.ads}>
                  <h1>Aqui Anúncios</h1>
                  <p>Olá eu sou um anúncio</p>
                </div>
              </li>
              <li>
                <div>
                  <NavLink to={"/"}>Home</NavLink>{" "}
                </div>
              </li>
              {data && (
                <>
                  <li>
                    <div>
                      <NavLink to={"/painel/minhas-listas"}>
                        Minhas Listas
                      </NavLink>{" "}
                    </div>
                  </li>
                  <li>
                    <div>
                      <NavLink to={"/painel/produtos"}>Produtos</NavLink>{" "}
                    </div>
                  </li>
                  <li>
                    <div>
                      <NavLink to={"/painel/categorias"}>Categorias</NavLink>{" "}
                    </div>
                  </li>
                  <li>
                    <div>
                      <NavLink to={"/painel/meusdados"}>Meus Dados</NavLink>{" "}
                    </div>
                  </li>
                  <button onClick={userLogout}>Sair</button>{" "}
                </>
              )}

              <li className={stylesMobile.pro}>
                <span>
                  <NavLink to={"painel/versaopro"}>
                    Versão Pro <img src={verificado} alt="" />
                  </NavLink>{" "}
                </span>
              </li>
              <li></li>
            </ul>
          </nav>
        </header>
      ) : (
        <header className={styles.headerBg}>
          <Container>
            <nav className={`${styles.nav}`}>
              <Link to={"/"}>
                <img className={styles.logo} src={logo} alt="" />
              </Link>

              {data ? (
                <div className={`${styles.containerLogin}`}>
                  <Link to={"/painel"}>Painel</Link>
                  <Link className={`${styles.login}`} to={"/conta"}>
                    {data.nome ? data.nome : data.username}
                    <img className={styles.config} src={services} alt="" />
                    <button onClick={userLogout}>Sair</button>
                  </Link>
                </div>
              ) : (
                <Link className={`${styles.login}`} to={"/login"}>
                  Login /Criar
                </Link>
              )}
            </nav>
          </Container>
        </header>
      )}
    </>
  );
};

export default Header;
