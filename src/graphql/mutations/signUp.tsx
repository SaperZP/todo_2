import { graphql } from '../gqlTypes';

const SIGN_UP = graphql(`
  mutation SignUp($input: SignUpInput) {
    signUp(input: $input) {
      token
      user {
        id
        name
        email
        avatar
      }
    }
  }
`);

export default SIGN_UP;
