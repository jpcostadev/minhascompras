import React from "react";
import useMedia from "../../../../../../Hooks/useMedia";
import useForm from "../../../../../../Hooks/useForm";
import { CATEGORIA_POST } from "../../../../../../Api";
import Input from "../../../../forms/Input";
import Button from "../../../../forms/Button";
import Error from "../../../../utils/Error";
import useFetch from "../../../../../../Hooks/useFetch";
import styles from "./CategoriaPost.module.css";

const CategoriaPost = () => {
  const categoria = useForm("text");
  const { data, error, loading, request } = useFetch();
  const mobile = useMedia("(max-width: 800px)");
  const [isCategoria, setIsCategoria] = React.useState(true);

  async function handleSubmit(event) {
    event.preventDefault();
    if (isCategoria) {
      const { url, options } = CATEGORIA_POST({
        categoria: categoria.value,
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
            label="Categoria"
            placeholder="Frios, Aves, Cereais..."
            name="categoria"
            type="text"
            {...categoria}
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

export default CategoriaPost;
