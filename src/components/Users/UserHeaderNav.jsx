import React from "react";
import useMedia from "../../../Hooks/useMedia";
import { Link, NavLink } from "react-router-dom";
import styles from "./UserHeaderNav.module.css";
import lista from "../../assets/img/icons/lista.png";
import categorias from "../../assets/img/icons/categorias.png";
import stats from "../../assets/img/icons/stats.png";
import produtos from "../../assets/img/icons/produtos.png";
import add from "../../assets/img/icons/add.png";

const UserHeaderNav = () => {
  const mobile = useMedia("(max-width: 800px)");
  const { mobileMenu, setMobileMenu } = React.useState(false);

  console.log(mobile);

  return (
    <>
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
                    <NavLink to={"/conta"}>
                      {" "}
                      <img src={lista} alt="" />{" "}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/conta/produtos"}>
                      {" "}
                      <img src={produtos} alt="" />{" "}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/conta/categorias"}>
                      {" "}
                      <img src={categorias} alt="" />
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/conta/estatisticas"}>
                      {" "}
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
                    <NavLink to={"/conta"}>Minhas Listas</NavLink>
                  </li>
                  <li>
                    {" "}
                    <NavLink to={"/conta/produtos"}>Produtos</NavLink>
                  </li>
                  <li>
                    {" "}
                    <NavLink to={"/conta/categorias"}>Categorias</NavLink>
                  </li>
                  <li>
                    {" "}
                    <NavLink to={"/conta/estatisticas"}>Estatísticas</NavLink>
                  </li>
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
