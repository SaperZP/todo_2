import { graphql } from '../gqlTypes';

const GET_TODO = graphql(`
  query GetTodo($getTodoId: ID!) {
    getTodo(id: $getTodoId) {
      id
      title
      description
      dueDate
      priority
      categoryId
      isDone
      ownerId
      owner {
        id
        name
        email
        avatar
      }
    }
  }
`);

export default GET_TODO;
