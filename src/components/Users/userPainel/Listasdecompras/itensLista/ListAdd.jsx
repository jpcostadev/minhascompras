import React from "react";
import useMedia from "../../../../../../Hooks/useMedia";
import useForm from "../../../../../../Hooks/useForm";
import { LISTA_POST } from "../../../../../../Api";
import Input from "../../../../forms/Input";
import Button from "../../../../forms/Button";
import Error from "../../../../utils/Error";
import useFetch from "../../../../../../Hooks/useFetch";
import styles from "./ListAdd.module.css";

const ListAdd = () => {
  const nome_lista = useForm("text");
  const { data, error, loading, request } = useFetch();
  const mobile = useMedia("(max-width: 800px)");
  const [isNovaLista, setIsNovaLista] = React.useState(true);

  async function handleSubmit(event) {
    event.preventDefault();
    if (isNovaLista) {
      const { url, options } = LISTA_POST({
        nome_lista: nome_lista.value,
      });
      request(url, options);
    }
  }
  React.useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <section className={styles.section}>
      {error && <Error error={error} />}

      <div>
        <form onSubmit={handleSubmit}>
          <Input
            label="Nome da Lista"
            placeholder="Ex: Festa do João"
            name="nome_lista"
            type="text"
            {...nome_lista}
          />
          {loading ? (
            <Button disabled>Salvando...</Button>
          ) : (
            <Button>Salvar</Button>
          )}
        </form>
      </div>
    </section>
  );
};

export default ListAdd;
