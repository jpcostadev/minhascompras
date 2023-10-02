import React from "react";
import useMedia from "../../../Hooks/useMedia";
import { Link, NavLink } from "react-router-dom";
import styles from "./UserHeaderNav.module.css";
import lista from "../img/icons/listas.svg";
import categorias from "../img/icons/categorias.svg";
import stats from "../img/icons/stats.svg";
import produtos from "../img/icons/produtos.svg";
import add from "../img/icons/add.png";
import carrinho from "../img/icons/carrinho.png";

const UserHeaderNav = () => {
  const mobile = useMedia("(max-width: 800px)");
  const { mobileMenu, setMobileMenu } = React.useState(false);

  return (
    <>
      <section></section>
      <section>
        <>
          {mobile ? (
            <div>
              <button className={styles.btnAdd}>
                <img src={add} alt="" />
              </button>
              <div className={styles.mobile}>
                <ul>
                  <li>
                    <NavLink to={"/painel/minhas-listas"}>
                      <img src={lista} alt="" />{" "}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/painel/categorias"}>
                      <img src={categorias} alt="" />
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/painel/produtos"}>
                      <img src={produtos} alt="" />{" "}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/painel/estatisticas"}>
                      <img src={stats} alt="" />
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div className={styles.Menu}>
              <nav className={styles.nav}>
                <ul>
                  <li>
                    <NavLink to={"/painel/minhas-listas"}>
                      Minhas Listas
                    </NavLink>
                  </li>

                  <li>
                    {" "}
                    <NavLink to={"/painel/categorias"}>Categorias</NavLink>
                  </li>
                  <li>
                    {" "}
                    <NavLink to={"/painel/produtos"}>Produtos</NavLink>
                  </li>
                  <li>
                    {" "}
                    <NavLink to={"/painel/estatisticas"}>Estatísticas</NavLink>
                  </li>

                  <div className={styles.carrinho}>
                    <img src={carrinho} alt="" />
                    <div className={styles.preco}>
                      <span>Itens (5)</span>
                      <span>Total R$ 15,58</span>
                    </div>
                  </div>
                </ul>
              </nav>
            </div>
          )}
        </>
      </section>
    </>
  );
};

export default UserHeaderNav;
