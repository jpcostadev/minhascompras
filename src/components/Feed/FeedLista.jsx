import React from "react";
import FeedItem from "./FeedItem";
import { UserContext } from "../../userContext";

const FeedLista = () => {
  const { data, loading, error, request } = React.useContext(UserContext);

  React.useEffect(() => {
    async function fetchListas() {}
    fetchListas();
  }, []);

  return (
    <div>
      <FeedItem />
    </div>
  );
};

export default FeedLista;
