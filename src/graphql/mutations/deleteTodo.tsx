import { graphql } from '../gqlTypes';

const DELETE_TODO = graphql(`
  mutation Mutation($deleteToDoId: ID!) {
    deleteToDo(id: $deleteToDoId)
  }
`);

export default DELETE_TODO;
