import { gql } from 'react-apollo';

export const UserQuery = gql`
  query {
    user {
      id
      picture
      pharmacies {
        id
        businessName
        pharmacyBranches {
          id
          location {
            surburb
          }
          phoneNumber
        }
      }
    }
  }
`;
