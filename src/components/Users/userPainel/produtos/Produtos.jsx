import React, { useState } from "react";
import styles from "./Produtos.module.css";
import ProdutosAdd from "./produtosItens/ProdutosAdd";
import FetchProdutos from "./produtosItens/FetchData/FetchProdutos";

const Produtos = () => {
  const [activeButton, setActiveButton] = useState("ProdutosAdd");
  const [produtos, setProdutos] = useState([]); // Estado para armazenar a lista de produtos

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.btns}>
          <button
            onClick={() => handleButtonClick("ProdutosAdd")}
            className={
              activeButton === "ProdutosAdd"
                ? styles.activeButton
                : styles.Button
            }
          >
            Novo Produto
          </button>
          <button
            onClick={() => handleButtonClick("ProdutosEdit")}
            className={
              activeButton === "ProdutosEdit"
                ? styles.activeButton
                : styles.Button
            }
          >
            Meus Produtos
          </button>
        </div>
        {activeButton === "ProdutosAdd" ? (
          <ProdutosAdd
            onAddProduto={(novoProduto) =>
              setProdutos([...produtos, novoProduto])
            }
          />
        ) : (
          <FetchProdutos setProdutos={setProdutos} />
        )}
        <div>
          <h3>Lista de Produtos:</h3>
          <FetchProdutos />
        </div>
      </div>
    </section>
  );
};

export default Produtos;
