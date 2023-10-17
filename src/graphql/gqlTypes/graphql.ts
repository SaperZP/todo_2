/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type AuthUser = {
  __typename?: 'AuthUser';
  token: Scalars['String']['output'];
  user: User;
};

export type Mutation = {
  __typename?: 'Mutation';
  createToDo: Todo;
  deleteToDo?: Maybe<Scalars['Boolean']['output']>;
  signIn: AuthUser;
  signUp: AuthUser;
  updateToDo: Todo;
};

export type MutationCreateToDoArgs = {
  input?: InputMaybe<CreateTodoInput>;
};

export type MutationDeleteToDoArgs = {
  id: Scalars['ID']['input'];
};

export type MutationSignInArgs = {
  input?: InputMaybe<SignInInput>;
};

export type MutationSignUpArgs = {
  input?: InputMaybe<SignUpInput>;
};

export type MutationUpdateToDoArgs = {
  id: Scalars['ID']['input'];
  input?: InputMaybe<UpdateTodoInput>;
};

export type Query = {
  __typename?: 'Query';
  getTodo: Todo;
  myTodos: Array<Todo>;
};

export type QueryGetTodoArgs = {
  id: Scalars['ID']['input'];
};

export type SignInInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type SignUpInput = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Todo = {
  __typename?: 'Todo';
  categoryId: Scalars['String']['output'];
  description: Scalars['String']['output'];
  dueDate: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isDone: Scalars['Boolean']['output'];
  owner: User;
  ownerId: Scalars['ID']['output'];
  priority: Scalars['Int']['output'];
  title: Scalars['String']['output'];
};

export type User = {
  __typename?: 'User';
  avatar?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type CreateTodoInput = {
  categoryId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  dueDate?: InputMaybe<Scalars['String']['input']>;
  isDone: Scalars['Boolean']['input'];
  priority?: InputMaybe<Scalars['Int']['input']>;
  title: Scalars['String']['input'];
};

export type UpdateTodoInput = {
  categoryId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  dueDate?: InputMaybe<Scalars['String']['input']>;
  isDone?: InputMaybe<Scalars['Boolean']['input']>;
  priority?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type CreateToDoMutationVariables = Exact<{
  input?: InputMaybe<CreateTodoInput>;
}>;

export type CreateToDoMutation = {
  __typename?: 'Mutation';
  createToDo: {
    __typename?: 'Todo';
    id: string;
    title: string;
    description: string;
    dueDate: string;
    priority: number;
    categoryId: string;
    isDone: boolean;
    ownerId: string;
    owner: {
      __typename?: 'User';
      id: string;
      name: string;
      email: string;
      avatar?: string | null;
    };
  };
};

export type MutationMutationVariables = Exact<{
  deleteToDoId: Scalars['ID']['input'];
}>;

export type MutationMutation = {
  __typename?: 'Mutation';
  deleteToDo?: boolean | null;
};

export type SignInMutationVariables = Exact<{
  input?: InputMaybe<SignInInput>;
}>;

export type SignInMutation = {
  __typename?: 'Mutation';
  signIn: {
    __typename?: 'AuthUser';
    token: string;
    user: {
      __typename?: 'User';
      name: string;
      id: string;
      avatar?: string | null;
      email: string;
    };
  };
};

export type SignUpMutationVariables = Exact<{
  input?: InputMaybe<SignUpInput>;
}>;

export type SignUpMutation = {
  __typename?: 'Mutation';
  signUp: {
    __typename?: 'AuthUser';
    token: string;
    user: {
      __typename?: 'User';
      id: string;
      name: string;
      email: string;
      avatar?: string | null;
    };
  };
};

export type UpdateToDoMutationVariables = Exact<{
  updateToDoId: Scalars['ID']['input'];
  input?: InputMaybe<UpdateTodoInput>;
}>;

export type UpdateToDoMutation = {
  __typename?: 'Mutation';
  updateToDo: {
    __typename?: 'Todo';
    id: string;
    title: string;
    description: string;
    dueDate: string;
    priority: number;
    categoryId: string;
    isDone: boolean;
    ownerId: string;
    owner: {
      __typename?: 'User';
      id: string;
      name: string;
      email: string;
      avatar?: string | null;
    };
  };
};

export type GetTodoQueryVariables = Exact<{
  getTodoId: Scalars['ID']['input'];
}>;

export type GetTodoQuery = {
  __typename?: 'Query';
  getTodo: {
    __typename?: 'Todo';
    id: string;
    title: string;
    description: string;
    dueDate: string;
    priority: number;
    categoryId: string;
    isDone: boolean;
    ownerId: string;
    owner: {
      __typename?: 'User';
      id: string;
      name: string;
      email: string;
      avatar?: string | null;
    };
  };
};

export type MyTodosQueryVariables = Exact<{ [key: string]: never }>;

export type MyTodosQuery = {
  __typename?: 'Query';
  myTodos: Array<{
    __typename?: 'Todo';
    id: string;
    title: string;
    description: string;
    dueDate: string;
    priority: number;
    categoryId: string;
    isDone: boolean;
    ownerId: string;
  }>;
};

export const CreateToDoDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateToDo' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'createTodoInput' },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createToDo' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                { kind: 'Field', name: { kind: 'Name', value: 'dueDate' } },
                { kind: 'Field', name: { kind: 'Name', value: 'priority' } },
                { kind: 'Field', name: { kind: 'Name', value: 'categoryId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'isDone' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'owner' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'email' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'avatar' },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'ownerId' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CreateToDoMutation, CreateToDoMutationVariables>;
export const MutationDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'Mutation' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'deleteToDoId' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'deleteToDo' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'deleteToDoId' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<MutationMutation, MutationMutationVariables>;
export const SignInDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'SignIn' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'SignInInput' },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'signIn' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'token' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'user' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'avatar' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'email' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SignInMutation, SignInMutationVariables>;
export const SignUpDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'SignUp' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'SignUpInput' },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'signUp' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'token' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'user' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'email' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'avatar' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SignUpMutation, SignUpMutationVariables>;
export const UpdateToDoDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'UpdateToDo' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'updateToDoId' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'updateTodoInput' },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'updateToDo' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'updateToDoId' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                { kind: 'Field', name: { kind: 'Name', value: 'dueDate' } },
                { kind: 'Field', name: { kind: 'Name', value: 'priority' } },
                { kind: 'Field', name: { kind: 'Name', value: 'categoryId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'isDone' } },
                { kind: 'Field', name: { kind: 'Name', value: 'ownerId' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'owner' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'email' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'avatar' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UpdateToDoMutation, UpdateToDoMutationVariables>;
export const GetTodoDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetTodo' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'getTodoId' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getTodo' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'getTodoId' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                { kind: 'Field', name: { kind: 'Name', value: 'dueDate' } },
                { kind: 'Field', name: { kind: 'Name', value: 'priority' } },
                { kind: 'Field', name: { kind: 'Name', value: 'categoryId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'isDone' } },
                { kind: 'Field', name: { kind: 'Name', value: 'ownerId' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'owner' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'email' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'avatar' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetTodoQuery, GetTodoQueryVariables>;
export const MyTodosDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'MyTodos' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'myTodos' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                { kind: 'Field', name: { kind: 'Name', value: 'dueDate' } },
                { kind: 'Field', name: { kind: 'Name', value: 'priority' } },
                { kind: 'Field', name: { kind: 'Name', value: 'categoryId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'isDone' } },
                { kind: 'Field', name: { kind: 'Name', value: 'ownerId' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<MyTodosQuery, MyTodosQueryVariables>;
