import React from "react";
import useFetch from "../../../../../../../Hooks/useFetch";
import useForm from "../../../../../../../Hooks/useForm";
import styles from "./FetchCategorias.module.css";

const FetchCategoria = () => {
  const categoria = useForm("");

  // Array de categorias
  const categorias = [
    "Cereais",
    "Frios",
    "Frutas",
    "Carnes",
    "Laticínios",
    "Bebidas",
    "Limpeza",
    "Higiene Pessoal",
    "Enlatados",
    "Padaria",
    "Molhos e Condimentos",
    "Produtos Congelados",
    "Doces e Sobremesas",
    "Produtos Orgânicos",
    "Produtos Sem Glúten",
    "Produtos Sem Lactose",
  ];

  return (
    <section className={styles.section}>
      {/* Seleção de categoria */}
      <div>
        <label htmlFor="categoria">Categorias</label>
        <select
          className={styles.select}
          name="categoria"
          onChange={(e) => categoria.setValue(e.target.value)}
          value={categoria.value}
        >
          <option value="">Selecione a Categoria</option>
          {categorias.map((nome, index) => (
            <option key={index} value={nome}>
              {nome}
            </option>
          ))}
        </select>
      </div>
    </section>
  );
};

export default FetchCategoria;
