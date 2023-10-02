import React from "react";
import styles from "./ListEdit.module.css";
import Button from "../../../../forms/Button";
import useFetch from "../../../../../../Hooks/useFetch";
import Input from "../../../../forms/Input";
import { LISTA_GET } from "../../../../../../Api";
import Error from "../../../../utils/Error";
import { NavLink } from "react-router-dom";

const ListEdit = () => {
  const { data, loading, error, request } = useFetch();

  // Puxar as listas de compras já cadastradas.
  React.useEffect(() => {
    const { url, options } = LISTA_GET();
    request(url, options);
  }, [request]);

  return (
    <section>
      {error && <Error error={error} />}
      <div>
        <NavLink />
      </div>
      <form action="">
        <h4>Minhas Listas</h4>
        <ul>
          {data ? (
            data.map((lista) => (
              <li key={lista.lista_id}>
                <Input placeholder={lista.nome_lista} />
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
