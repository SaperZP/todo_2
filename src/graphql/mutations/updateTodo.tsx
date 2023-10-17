import { graphql } from '../gqlTypes';

const UPDATE_TODO = graphql(`
  mutation UpdateToDo($updateToDoId: ID!, $input: updateTodoInput) {
    updateToDo(id: $updateToDoId, input: $input) {
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

export default UPDATE_TODO;
