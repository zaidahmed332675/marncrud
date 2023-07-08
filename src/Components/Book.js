import React from "react";

const Book = ({ book }) => {
  return (
    <tr>
      <td>{book.title}</td>
      <td>{book.year}</td>
    </tr>
  );
};

export default Book;
