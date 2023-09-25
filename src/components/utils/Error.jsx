import React, { useState, useEffect } from "react";
import styles from "./Error.module.css";
import { UserContext } from "../../userContext";

const Error = ({ error }) => {
  const [modal, setModal] = useState(false);
  const { setError } = React.useContext(UserContext);
  // Use useEffect para monitorar mudanças na prop 'error'
  useEffect(() => {
    if (error) {
      // Se houver um erro, exibe o modal
      setModal(true);
    }
  }, [error]);

  // Função para fechar o modal
  const closeModal = () => {
    setModal(false);
  };

  if (!error || !modal) return null;

  return (
    <div className={styles.errorModal}>
      <div className={styles.erro}>
        <h1>Ops...</h1>
        <p>{error}</p>
        <button onClick={closeModal} className={styles.btnOk}>
          Ok
        </button>
      </div>
    </div>
  );
};

export default Error;
