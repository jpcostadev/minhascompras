import React from "react";
import styles from "./Categorias.module.css";
import CategoriaGet from "./itensCategoria/CategoriasGet";
import CategoriaPost from "./itensCategoria/CategoriaPost";
import { NavLink } from "react-router-dom";

const Categorias = () => {
  const [activeButton, setActiveButton] = React.useState("CategoriaAdd"); // Cria um estado para rastrear o botão ativo
  const handleButtonClick = (buttonName) => {
    // Função para lidar com o clique nos botões
    setActiveButton(buttonName); // Define o botão ativo com base no nome do botão clicado
  };
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.btns}>
          <button
            onClick={() => handleButtonClick("CategoriaAdd")}
            className={
              activeButton === "CategoriaAdd"
                ? styles.activeButton
                : styles.Button
            }
          >
            Nova Categoria
          </button>
          <button
            onClick={() => handleButtonClick("CategoriaEdit")}
            className={
              activeButton === "CategoriaEdit"
                ? styles.activeButton
                : styles.Button
            }
          >
            Minhas Categorias
          </button>
        </div>
        {activeButton === "CategoriaAdd" ? <CategoriaPost /> : <CategoriaGet />}
        <h1>Aqui Alguma outra coisa! </h1>
      </div>
    </section>
  );
};

export default Categorias;
