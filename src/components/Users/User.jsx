import React from "react";
import UserHeader from "./UserHeader";
import styles from "./User.module.css";
import Container from "../global/Container";
import { Route, Routes } from "react-router-dom";
import UserPainel from "./userPainel/UserPainel";
import UserShopList from "./userPainel/UserShopList";
import UserStats from "./userPainel/UserStats";

const User = () => {
  return (
    <section className={styles.userBg}>
      <Container>
        <UserHeader />
        <Routes>
          <Route path="/" element={<UserPainel />} />
          <Route path="/postar" element={<UserShopList />} />
          <Route path="/estatisticas" element={<UserStats />} />
        </Routes>
      </Container>
    </section>
  );
};

export default User;
