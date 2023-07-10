import { useMutation } from "@apollo/client";
import { useState } from "react";
import { createBookMutation, getBooksQuery } from "../graphql";

const CreateBook = () => {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");

  const [createMutation] = useMutation(createBookMutation, {
    refetchQueries: [
      {
        query: getBooksQuery,
      },
    ],
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    createMutation({
      variables: {
        title,
        year: +year,
      },
    });
    setTitle("");
    setYear("");
  };

  return (
    <form onSubmit={(evt) => handleSubmit(evt)}>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          title="title"
          className="form-control"
          type="text"
          value={title}
          onChange={({ target: { value } }) => setTitle(value)}
        />
      </div>
      <div className="form-group mt-3">
        <label htmlFor="year">Year</label>
        <input
          title="year"
          className="form-control"
          type="text"
          value={year}
          onChange={({ target: { value } }) => setYear(value)}
        />
      </div>
      <input className="btn btn-primary mt-3" type="submit" value="Create" />
    </form>
  );
};

export default CreateBook;
