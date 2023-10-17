import { graphql } from '../gqlTypes';

const MY_TODOS = graphql(`
  query MyTodos {
    myTodos {
      id
      title
      description
      dueDate
      priority
      categoryId
      isDone
      ownerId
    }
  }
`);

export default MY_TODOS;
