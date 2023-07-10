import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

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

  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/books" className="nav-link">
            Books
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/create" className="nav-link">
            Create
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
