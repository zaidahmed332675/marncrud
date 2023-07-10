import { gql } from "@apollo/client";

export const getBooksQuery = gql`
  query Query {
    books {
      id
      title
      year
    }
  }
`;

export const createBookMutation = gql`
  mutation CreateBook($title: String, $year: Int) {
    create(title: $title, year: $year) {
      id
      title
      year
    }
  }
`;

export const deleteBookMutation = gql`
  mutation DeleteBook($id: ID) {
    delete(id: $id)
  }
`;

export const editBookMutation = gql`
  mutation EditBook($id: ID, $title: String, $year: Int) {
    edit(id: $id, title: $title, year: $year){
        id
        title
        year
    }
  }
`;
