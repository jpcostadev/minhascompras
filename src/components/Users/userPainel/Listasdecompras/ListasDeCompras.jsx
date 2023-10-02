import React from "react";
import styles from "./ListasDeCompras.module.css"; // Importa o arquivo CSS para estilos
import Error from "../../../utils/Error"; // Importa o componente Error
import useForm from "../../../../../Hooks/useForm"; // Importa o hook useForm
import useFetch from "../../../../../Hooks/useFetch"; // Importa o hook useFetch
import ListEdit from "./itensLista/ListEdit"; // Importa o componente ListEdit
import useMedia from "../../../../../Hooks/useMedia"; // Importa o hook useMedia
import ListAdd from "./itensLista/ListAdd"; // Importa o componente ListAdd

const UserListPost = () => {
  const nome_lista = useForm("text"); // Cria um hook useForm para o campo "nome_lista"
  const { error } = useFetch(); // Chama o hook useFetch e obtém a propriedade "error"
  const mobile = useMedia("(max-width: 800px)"); // Chama o hook useMedia para verificar a largura da tela
  const [activeButton, setActiveButton] = React.useState("listAdd"); // Cria um estado para rastrear o botão ativo

  const handleButtonClick = (buttonName) => {
    // Função para lidar com o clique nos botões
    setActiveButton(buttonName); // Define o botão ativo com base no nome do botão clicado
  };

  return (
    <>
      <section className={styles.section}>
        {error && <Error error={error} />}{" "}
        {/* Renderiza o componente Error se houver um erro */}
        <div className={styles.formContainer}>
          <div className={styles.buttonContainer}>
            {/* Renderiza dois botões com eventos de clique */}
            <button
              onClick={() => handleButtonClick("listAdd")}
              className={
                activeButton === "listAdd" ? styles.activeButton : styles.Button
              }
            >
              Nova Lista
            </button>
            <button
              onClick={() => handleButtonClick("listEdit")}
              className={
                activeButton === "listEdit"
                  ? styles.activeButton
                  : styles.Button
              }
            >
              Minhas Listas
            </button>
          </div>
          <div>
            {activeButton === "listAdd" ? <ListAdd /> : <ListEdit />}
            {/* Renderiza ListAdd ou ListEdit com base no botão ativo */}
          </div>

          <div className={`${styles.add} ${mobile && styles.addActive}`}>
            <h1>Aqui alguma coisa</h1>
            <p>Não posso esquecer de colocar algo aqui! </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserListPost;
