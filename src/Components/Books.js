import { gql, useQuery } from "@apollo/client";

const query = gql`
  query Query() {
    books {
        id
        title
        year
    }
  }
`;

const Books = () => {
  const { data, loading, error } = useQuery(query);
  console.log(data, loading, error);
  return <div>Books</div>;
};

export default Books;
