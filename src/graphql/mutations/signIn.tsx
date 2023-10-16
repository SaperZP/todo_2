import { graphql } from '../gqlTypes';

const SIGN_IN = graphql(`
  mutation SignIn($input: SignInInput) {
    signIn(input: $input) {
      token
      user {
        name
        id
        avatar
        email
      }
    }
  }
`);

export default SIGN_IN;
