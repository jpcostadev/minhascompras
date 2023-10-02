import React from "react";
import { LISTA_GET } from "../../../../../../../Api";
import useFetch from "../../../../../../../Hooks/useFetch";
import useForm from "../../../../../../../Hooks/useForm";
import styles from "./FetchListas.module.css";

const FetchListas = () => {
  const { data, error, loading, request } = useFetch();
  const nome_lista = useForm("");

  const [listaNomes, setListaNomes] = React.useState([]);

  // UseEffect para buscar dados de listas e categorias ao carregar o componente
  React.useEffect(() => {
    // Função para buscar nomes das listas
    const fetchListaNomes = async () => {
      try {
        const { url, options } = LISTA_GET();
        const { response, json } = await request(url, options);

        // Mapeia o JSON para obter os nomes das listas
        const nomes = Array.isArray(json)
          ? json.map((item) => item.nome_lista)
          : [];

        // Define os nomes das listas no estado
        setListaNomes(nomes);
      } catch (error) {
        // Lida com erros, se necessário
        console.error("Erro ao buscar nomes das listas:", error);
      }
    };

    fetchListaNomes();
  }, [request]);

  return (
    <section className={styles.section}>
      {/* Seleção de lista */}
      <div className={styles.divListas}>
        <label htmlFor="nome_lista">Lista</label>
        <select
          className={styles.select}
          name="nome_lista"
          onChange={(e) => nome_lista.setValue(e.target.value)}
          value={nome_lista.value}
        >
          <option value="">Selecione uma lista</option>

          {/* Mapeia os nomes das listas como opções */}
          {listaNomes.map((nome, index) => (
            <option key={index} value={nome}>
              {nome}
            </option>
          ))}
        </select>
      </div>
    </section>
  );
};

export default FetchListas;
