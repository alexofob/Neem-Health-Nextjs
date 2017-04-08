import { gql } from 'react-apollo';

export const userQuery = gql`
  query {
    user {
      id,
      firstname,
      picture,
    }
  }
`;

export const createUserMutation = gql`
  mutation ($idToken: String!, $firstname: String!, $surname: String!,
    $emailAddress: String!, $picture: String!) {
    createUser(authProvider: {auth0: {idToken: $idToken}},
      firstname: $firstname, surname: $surname, emailAddress: $emailAddress, picture: $picture) {
      id
    }
  }
`;
