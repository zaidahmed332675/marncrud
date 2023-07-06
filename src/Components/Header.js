import { gql, useQuery } from "@apollo/client";

// Query is just a name here to represent our query
const query = gql`
  query Query($name: String) {
    hello(name: $name)
  }
`;

const Header = () => {
  const { data, loading, error } = useQuery(query, {
    variables: {
      name: "Zaid Ahmed",
    },
  });

  console.log(data, error);

  if (loading) return <div>Loading.....</div>;
  if (error) {
    console.log(error);
    return <div>Error!</div>;
  }

  return <div>{data.hello}</div>;
};

export default Header;
