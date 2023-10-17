/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  '\n  mutation CreateToDo($input: createTodoInput) {\n    createToDo(input: $input) {\n      id\n      title\n      description\n      dueDate\n      priority\n      categoryId\n      isDone\n      owner {\n        id\n        name\n        email\n        avatar\n      }\n      ownerId\n    }\n  }\n':
    types.CreateToDoDocument,
  '\n  mutation Mutation($deleteToDoId: ID!) {\n    deleteToDo(id: $deleteToDoId)\n  }\n':
    types.MutationDocument,
  '\n  mutation SignIn($input: SignInInput) {\n    signIn(input: $input) {\n      token\n      user {\n        name\n        id\n        avatar\n        email\n      }\n    }\n  }\n':
    types.SignInDocument,
  '\n  mutation SignUp($input: SignUpInput) {\n    signUp(input: $input) {\n      token\n      user {\n        id\n        name\n        email\n        avatar\n      }\n    }\n  }\n':
    types.SignUpDocument,
  '\n  mutation UpdateToDo($updateToDoId: ID!, $input: updateTodoInput) {\n    updateToDo(id: $updateToDoId, input: $input) {\n      id\n      title\n      description\n      dueDate\n      priority\n      categoryId\n      isDone\n      ownerId\n      owner {\n        id\n        name\n        email\n        avatar\n      }\n    }\n  }\n':
    types.UpdateToDoDocument,
  '\n  query GetTodo($getTodoId: ID!) {\n    getTodo(id: $getTodoId) {\n      id\n      title\n      description\n      dueDate\n      priority\n      categoryId\n      isDone\n      ownerId\n      owner {\n        id\n        name\n        email\n        avatar\n      }\n    }\n  }\n':
    types.GetTodoDocument,
  '\n  query MyTodos {\n    myTodos {\n      id\n      title\n      description\n      dueDate\n      priority\n      categoryId\n      isDone\n      ownerId\n    }\n  }\n':
    types.MyTodosDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation CreateToDo($input: createTodoInput) {\n    createToDo(input: $input) {\n      id\n      title\n      description\n      dueDate\n      priority\n      categoryId\n      isDone\n      owner {\n        id\n        name\n        email\n        avatar\n      }\n      ownerId\n    }\n  }\n'
): (typeof documents)['\n  mutation CreateToDo($input: createTodoInput) {\n    createToDo(input: $input) {\n      id\n      title\n      description\n      dueDate\n      priority\n      categoryId\n      isDone\n      owner {\n        id\n        name\n        email\n        avatar\n      }\n      ownerId\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation Mutation($deleteToDoId: ID!) {\n    deleteToDo(id: $deleteToDoId)\n  }\n'
): (typeof documents)['\n  mutation Mutation($deleteToDoId: ID!) {\n    deleteToDo(id: $deleteToDoId)\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation SignIn($input: SignInInput) {\n    signIn(input: $input) {\n      token\n      user {\n        name\n        id\n        avatar\n        email\n      }\n    }\n  }\n'
): (typeof documents)['\n  mutation SignIn($input: SignInInput) {\n    signIn(input: $input) {\n      token\n      user {\n        name\n        id\n        avatar\n        email\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation SignUp($input: SignUpInput) {\n    signUp(input: $input) {\n      token\n      user {\n        id\n        name\n        email\n        avatar\n      }\n    }\n  }\n'
): (typeof documents)['\n  mutation SignUp($input: SignUpInput) {\n    signUp(input: $input) {\n      token\n      user {\n        id\n        name\n        email\n        avatar\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation UpdateToDo($updateToDoId: ID!, $input: updateTodoInput) {\n    updateToDo(id: $updateToDoId, input: $input) {\n      id\n      title\n      description\n      dueDate\n      priority\n      categoryId\n      isDone\n      ownerId\n      owner {\n        id\n        name\n        email\n        avatar\n      }\n    }\n  }\n'
): (typeof documents)['\n  mutation UpdateToDo($updateToDoId: ID!, $input: updateTodoInput) {\n    updateToDo(id: $updateToDoId, input: $input) {\n      id\n      title\n      description\n      dueDate\n      priority\n      categoryId\n      isDone\n      ownerId\n      owner {\n        id\n        name\n        email\n        avatar\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query GetTodo($getTodoId: ID!) {\n    getTodo(id: $getTodoId) {\n      id\n      title\n      description\n      dueDate\n      priority\n      categoryId\n      isDone\n      ownerId\n      owner {\n        id\n        name\n        email\n        avatar\n      }\n    }\n  }\n'
): (typeof documents)['\n  query GetTodo($getTodoId: ID!) {\n    getTodo(id: $getTodoId) {\n      id\n      title\n      description\n      dueDate\n      priority\n      categoryId\n      isDone\n      ownerId\n      owner {\n        id\n        name\n        email\n        avatar\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query MyTodos {\n    myTodos {\n      id\n      title\n      description\n      dueDate\n      priority\n      categoryId\n      isDone\n      ownerId\n    }\n  }\n'
): (typeof documents)['\n  query MyTodos {\n    myTodos {\n      id\n      title\n      description\n      dueDate\n      priority\n      categoryId\n      isDone\n      ownerId\n    }\n  }\n'];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
