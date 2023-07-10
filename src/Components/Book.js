import { useMutation } from "@apollo/client";
import {
  deleteBookMutation,
  editBookMutation,
  getBooksQuery,
} from "../graphql";
import { useState } from "react";

const Book = ({ book }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(book.title);
  const [year, setYear] = useState(book.year);

  const [deleteBook] = useMutation(deleteBookMutation, {
    refetchQueries: [{ query: getBooksQuery }],
  });

  const [editBook] = useMutation(editBookMutation, {
    refetchQueries: [{ query: getBooksQuery }],
  });

  const handleEditBook = () => {
    setIsEditing(true);
  };

  const handleSaveBook = () => {
    setIsEditing(false);
    editBook({
      variables: {
        id: book.id,
        title,
        year: +year,
      },
    });
  };

  const handleDeleteBook = () => {
    deleteBook({
      variables: {
        id: book.id,
      },
    });
  };

  return (
    <tr>
      <td>
        {isEditing ? (
          <input
            required
            value={title}
            onChange={({ target: { value } }) => setTitle(value)}
          />
        ) : (
          book.title
        )}
      </td>
      <td>
        {isEditing ? (
          <input
            required
            value={year}
            onChange={({ target: { value } }) => setYear(value)}
          />
        ) : (
          book.year
        )}
      </td>
      <td>
        <button
          className="btn btn-success"
          onClick={isEditing ? handleSaveBook : handleEditBook}
        >
          {isEditing ? "Save" : "Edit"}
        </button>
        <button className="btn btn-danger" onClick={handleDeleteBook}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Book;
