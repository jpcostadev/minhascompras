import React from "react";
import UserHeader from "./UserHeader";
import styles from "./User.module.css";
import Container from "../global/Container";
import { Route, Routes } from "react-router-dom";
import UserPainel from "./userPainel/UserPainel";
import UserStats from "./userPainel/UserStats";
import Categorias from "../Users/userPainel/categorias/Categorias";
import Produtos from "./userPainel/produtos/Produtos";
import ListaDeCompras from "./userPainel/Listasdecompras/ListasDeCompras";

const User = () => {
  return (
    <section className={styles.userBg}>
      <Container>
        <UserHeader />
        <Routes>
          <Route path="/" element={<UserPainel />} />
          <Route path="/minhas-listas" element={<ListaDeCompras />} />
          <Route path="/categorias" element={<Categorias />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/estatisticas" element={<UserStats />} />
        </Routes>
      </Container>
    </section>
  );
};

export default User;
