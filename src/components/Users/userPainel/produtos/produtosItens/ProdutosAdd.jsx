import React from "react";
import useMedia from "../../../../../../Hooks/useMedia";
import useForm from "../../../../../../Hooks/useForm";
import { PRODUTO_POST } from "../../../../../../Api";
import Input from "../../../../forms/Input";
import Button from "../../../../forms/Button";
import Error from "../../../../utils/Error";
import Select from "../../../../forms/Select";
import useFetch from "../../../../../../Hooks/useFetch"; // Importa o hook useFetch, que parece ser personalizado
import styles from "./ProdutosAdd.module.css";
import FetchCategoria from "./FetchData/FetchCategoria";
import FetchListas from "./FetchData/FetchListas";

const ProdutosAdd = () => {
  // Hook de useFetch para fazer requisições de dados
  const { data, error, loading, request } = useFetch();

  // Hook para determinar a largura da tela
  const mobile = useMedia("(max-width: 800px)");

  // Estado para controlar se é um produto
  const [isprodutos, setIsProdutos] = React.useState(true);

  // Configuração de hooks para controle de formulário
  const produto = useForm("");
  const nome_lista = useForm("");
  const categoria = useForm("");
  const quantidade = useForm("number");
  const tipo = useForm("");
  const preco = useForm("");

  const tiposUnidade = [
    { value: "un", label: "un" },
    { value: "kg", label: "kg" },
    { value: "ml", label: "ml" },
    { value: "g", label: "Gramas" },
    { value: "l", label: "Litro" },
    { value: "caixa", label: "Caixa" },
    { value: "lata", label: "Lata" },
    { value: "pacote", label: "Pacote" },
    // Adicione mais opções conforme necessário
  ];

  // Função para lidar com o envio do formulário
  async function handleSubmit(event) {
    event.preventDefault();
    if (isprodutos) {
      const { url, options } = PRODUTO_POST({
        nome_lista: nome_lista.value,
        produto: produto.value,
        quantidade: quantidade.value,
        categoria: categoria.value,
        preco: preco.value,
        tipo: tipo.value,
      });

      // Faz a requisição para salvar o produto
      request(url, options);
    }
  }

  return (
    <section className={styles.section}>
      {error && <Error error={error} />}

      <div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <FetchListas />

          {/* Entrada de texto para produtos */}
          <Input
            required
            label="Produtos"
            placeholder="Frios, Aves, Cereais..."
            name="produtos"
            type="text"
            {...produto}
          />

          <FetchCategoria />

          {/* Entrada de texto para preço */}
          <Input
            placeholder="R$:"
            label="Preço:"
            name="preco"
            type="number"
            {...preco}
          />

          <div>
            <label htmlFor="tipo">Unidade</label>
            <Select
              options={tiposUnidade}
              name="tipo"
              value={tipo.value}
              onChange={(e) => tipo.setValue(e.target.value)}
            />
          </div>

          {/* Botões para ajustar a quantidade */}
          <label htmlFor="quantidade">Quantidade</label>
          <div className={styles.btns}>
            <div>
              <button
                onClick={(event) => {
                  event.preventDefault();
                  quantidade.setValue(
                    Math.max(parseInt(quantidade.value) - 1, 0),
                  );
                }}
              >
                -
              </button>
            </div>

            <div>
              <Input
                placeholder="1"
                className={styles.input}
                name="quantidade"
                type="number"
                value={"1"}
                {...quantidade}
              />
            </div>

            <div>
              <button
                onClick={(event) => {
                  event.preventDefault();
                  const newValue =
                    quantidade.value === ""
                      ? 1
                      : parseInt(quantidade.value) + 1;
                  quantidade.setValue(newValue);
                }}
              >
                +
              </button>
            </div>
          </div>

          {/* Botão de envio */}
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

export default ProdutosAdd;
