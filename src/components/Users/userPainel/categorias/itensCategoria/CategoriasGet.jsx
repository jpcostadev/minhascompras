import React from "react";
import styles from "./CategoriaGet.module.css";
import Button from "../../../../forms/Button";
import useFetch from "../../../../../../Hooks/useFetch";
import Input from "../../../../forms/Input";
import { CATEGORIA_GET } from "../../../../../../Api";
import Error from "../../../../utils/Error";
import { NavLink, Navigate } from "react-router-dom";
import { func } from "prop-types";

const ListEdit = () => {
  const { data, loading, error, request } = useFetch();
  console.log(data);

  const [enviar, setEnviar] = React.useState(false);

  // Puxar as listas de compras já cadastradas.
  React.useEffect(() => {
    async function fetchCategoria() {
      const { url, options } = CATEGORIA_GET();
      const { response, json } = await request(url, options);
      if (response.ok) {
        setEnviar(true);
      }
      console.log(response);
    }
    fetchCategoria();
  }, [request]);

  return (
    <section>
      {error && <Error error={error} />}
      <div>
        <NavLink />
      </div>
      <form action="">
        <h4>Minhas Categorias</h4>
        <ul>
          {data ? (
            data.map((categoria) => (
              <li key={categoria.id}>
                <Input placeholder={categoria.post_title} />
              </li>
            ))
          ) : (
            <p>Carregando...</p>
          )}
        </ul>
        <Button>Editar</Button>
      </form>
    </section>
  );
};

export default ListEdit;
