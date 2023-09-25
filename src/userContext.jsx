import React from "react";
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from "../Api";
import { useNavigate } from "react-router-dom";

// Criação de um contexto para gerenciamento de dados de usuário
export const UserContext = React.createContext();

// Componente de contexto para gerenciamento de dados de usuário
export const UserStorage = ({ children }) => {
  // Estados para armazenar os dados do usuário, estado de login, estado de carregamento e erros
  const [data, setData] = React.useState(null); // Armazena os dados do usuário
  const [login, setLogin] = React.useState(null); // Controla o status de login (true se o usuário estiver logado, false caso contrário)
  const [loading, setLoading] = React.useState(false); // Indica se uma operação de carregamento está em andamento
  const [error, setError] = React.useState(null); // Armazena mensagens de erro, se houverem

  // Hook de navegação para redirecionar o usuário para diferentes rotas
  const navigate = useNavigate();

  // Função para buscar os dados do usuário usando um token
  async function fetchUserData(token) {
    try {
      setError(null); // Limpa qualquer erro anterior
      setLoading(true); // Indica que uma operação de carregamento está em andamento
      const { url, options } = USER_GET(token); // Obtém a URL e as opções da solicitação
      const response = await fetch(url, options); // Realiza a chamada à API
      if (!response.ok) throw new Error("Erro ao buscar dados do usuário"); // Lança um erro se a resposta não estiver OK
      const userData = await response.json(); // Converte os dados da resposta em JSON
      setData(userData); // Armazena os dados do usuário
      setLogin(true); // Define login como true para indicar que o usuário está logado
    } catch (err) {
      setError(err.message); // Armazena a mensagem de erro
      setLogin(false); // Define login como false em caso de erro
    } finally {
      setLoading(false); // Indica que a operação de carregamento terminou
    }
  }

  // Função para atualizar os dados do usuário no contexto
  const updateUserData = async (token) => {
    try {
      const { url, options } = USER_GET(token); // Obtém a URL e as opções da solicitação
      const response = await fetch(url, options); // Realiza a chamada à API
      if (!response.ok) throw new Error("Erro ao buscar dados do usuário"); // Lança um erro se a resposta não estiver OK
      const userData = await response.json(); // Converte os dados da resposta em JSON
      setData(userData); // Armazena os dados do usuário
      setLogin(true); // Define login como true para indicar que o usuário está logado
    } catch (err) {
      setError(err.message); // Armazena a mensagem de erro
      setLogin(false); // Define login como false em caso de erro
    } finally {
      setLoading(false); // Indica que a operação de carregamento terminou
    }
  };

  // Função para fazer logout do usuário
  const userLogout = React.useCallback(
    async function () {
      setData(null); // Limpa os dados do usuário
      setError(null); // Limpa qualquer erro
      setLoading(false); // Indica que a operação de carregamento terminou
      setLogin(false); // Define login como false
      window.localStorage.removeItem("token"); // Remove o token do armazenamento local
      navigate("/login"); // Redireciona o usuário para a página de login
    },
    [navigate],
  );

  // Função para buscar dados do usuário usando um token
  async function getUser(token) {
    const { url, options } = USER_GET(token); // Obtém a URL e as opções da solicitação
    const response = await fetch(url, options); // Realiza a chamada à API
    const json = await response.json(); // Converte os dados da resposta em JSON
    setData(json); // Armazena os dados do usuário
    setLogin(true); // Define login como true
  }

  // Função para fazer login do usuário
  async function userLogin(username, password) {
    try {
      setError(null); // Limpa qualquer erro anterior
      setLoading(true); // Indica que uma operação de carregamento está em andamento
      const { url, options } = TOKEN_POST({ username, password }); // Obtém a URL e as opções da solicitação de token
      const response = await fetch(url, options); // Realiza a chamada à API
      const errorMessage = response.statusText || "Usuário não existe";
      if (!response.ok) throw new Error(`${errorMessage}`); // Lança um erro se a resposta não estiver OK
      const { token } = await response.json(); // Obtém o token da resposta
      window.localStorage.setItem("token", token); // Armazena o token no armazenamento local
      await getUser(token); // Obtém os dados do usuário com o token
      navigate("/conta"); // Redireciona o usuário para a página de conta
    } catch (err) {
      setError(err.message); // Armazena a mensagem de erro
      setLogin(false); // Define login como false em caso de erro
    } finally {
      setLoading(false); // Indica que a operação de carregamento terminou
    }
  }

  // Hook de efeito para realizar o login automático do usuário se um token estiver armazenado
  React.useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem("token"); // Obtém o token do armazenamento local
      if (token) {
        try {
          setError(null); // Limpa qualquer erro anterior
          setLoading(true); // Indica que uma operação de carregamento está em andamento
          const { url, options } = TOKEN_VALIDATE_POST(token); // Obtém a URL e as opções da solicitação de validação do token
          const response = await fetch(url, options); // Realiza a chamada à API
          if (!response.ok) throw new Error("Token inválido"); // Lança um erro se a resposta não estiver OK
          await getUser(token); // Obtém os dados do usuário com o token
        } catch (err) {
          setLogin(false); // Define login como false em caso de erro
          userLogout(); // Realiza o logout do usuário
        } finally {
          setLoading(false); // Indica que a operação de carregamento terminou
        }
      } else {
        setLogin(false); // Define login como false se não houver token armazenado
      }
    }
    autoLogin();
  }, [userLogout]);

  // Fornecimento de dados e funções de contexto para os componentes filhos
  return (
    <UserContext.Provider
      value={{
        userLogin,
        setData,
        userLogout,
        getUser,
        updateUserData,
        data,
        error,
        loading,
        login,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
