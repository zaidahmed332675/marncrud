import { useQuery } from "@apollo/client";
import Book from "../Components/Book";
import { getBooksQuery } from "../graphql";

const Books = () => {
  const { data, loading, error } = useQuery(getBooksQuery);

  return (
    <div>
      <table className="table table-dark">
        <thead>
          <tr>
            <th>Title</th>
            <th>Year</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {loading && (
            <tr>
              <td>Loading...</td>
            </tr>
          )}
          {error && (
            <tr>
              <td>Error!</td>
            </tr>
          )}
          {!loading &&
            !error &&
            data?.books?.map((book) => {
              return <Book book={book} key={book.id} />;
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Books;
