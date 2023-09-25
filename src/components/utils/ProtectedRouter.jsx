import React from "react";
import { UserContext } from "../../userContext";
import { Navigate, useNavigate } from "react-router-dom";

const ProtectedRouter = ({ children }) => {
  const navigate = useNavigate(); // Obtém a função de navegação para redirecionamento

  // Obtém o estado de login do contexto usando useContext
  const { login } = React.useContext(UserContext);

  if (login === true) {
    // Se o usuário estiver logado, renderiza os componentes filhos
    return children;
  } else if (login === false) {
    // Se o usuário não estiver logado, usa o componente Navigate para redirecionar para a página de login
    return <Navigate to="/login" />;
  } else {
    // Se o estado de login não estiver definido, retorna um fragment vazio (nenhuma renderização)
    return <></>;
  }
};

export default ProtectedRouter;
