import React from "react";
import style from "./Error.module.css";

/**
 * O componente Error é usado para exibir mensagens de erro formatadas.
 *
 * @component
 * @param {object} props - As propriedades do componente.
 * @param {string} props.error - A mensagem de erro a ser exibida.
 * @returns {JSX.Element} - Retorna um elemento JSX que exibe a mensagem de erro formatada.
 */
const Error = ({ error }) => {
  return <p className={style.erro}>{error}</p>;
};

export default Error;
/*Nesses comentários, explicamos que o componente Error é usado para exibir mensagens de erro formatadas. Detalhamos as propriedades que ele aceita e o que retorna, tornando mais fácil entender como usar esse componente em outros lugares do código.*/
