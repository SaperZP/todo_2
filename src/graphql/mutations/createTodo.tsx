import { graphql } from '../gqlTypes';

const CREATE_TODO = graphql(`
  mutation CreateToDo($input: createTodoInput) {
    createToDo(input: $input) {
      id
      title
      description
      dueDate
      priority
      categoryId
      isDone
      owner {
        id
        name
        email
        avatar
      }
      ownerId
    }
  }
`);

export default CREATE_TODO;
