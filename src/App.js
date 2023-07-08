import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";

const client = new ApolloClient({
  uri: "http://localhost:3001",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
