import { gql } from 'react-apollo';

export default gql`
  mutation ($businessName: String!, $phoneNumber: String, $userId: ID!,
    $street: String, $city: String, $region: String, $lat: Float, $lng: Float, $surburb: String) {
    createPharmacy(
      businessName: $businessName,
      phoneNumber: $phoneNumber,
      userId: $userId,
      pharmacyBranches: [{
        phoneNumber: $phoneNumber,
        location: {
          street: $street,
          city: $city,
          region: $region,
          lat: $lat,
          lng: $lng,
          surburb: $surburb
        }
      }]
    ) {
        id
      }
  }
`;
