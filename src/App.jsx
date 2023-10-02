import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styles from "./App.css";
import Header from "./components/headersFooters/Header";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import { UserStorage } from "./userContext";
import User from "./components/Users/User";
import ProtectedRouter from "./components/utils/ProtectedRouter";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login/*" element={<Login />} />

            <Route
              path="/painel/*"
              element={
                <ProtectedRouter>
                  <User />
                </ProtectedRouter>
              }
            />
          </Routes>
        </UserStorage>
      </BrowserRouter>
    </div>
  );
};

export default App;
