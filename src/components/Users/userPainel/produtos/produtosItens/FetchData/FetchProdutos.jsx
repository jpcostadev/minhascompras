import React from "react";
import useFetch from "../../../../../../../Hooks/useFetch";
import { PRODUTO_GET } from "../../../../../../../Api";

const FetchProdutos = () => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PRODUTO_GET();
    const { response, json } = request(url, options);
    console.log(json);
  }, [request]);

  return <div>FetchProdutos</div>;
};

export default FetchProdutos;
