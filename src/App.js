import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import Header from "./Components/Header";

const client = new ApolloClient({
  uri: "http://localhost:3001",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Header />
    </ApolloProvider>
  );
}

export default App;
