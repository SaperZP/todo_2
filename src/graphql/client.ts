import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { makeVar } from '@apollo/client';

export const authToken = makeVar(localStorage.getItem('token'));

const httpLink = createHttpLink({
  uri: 'https://todo-2-server.onrender.com/',
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: authToken() || '',
    },
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
