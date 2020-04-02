import gql from 'graphql-tag';

export const registerUser = gql`
  mutation (
    $firstName: String!,
    $lastName: String!,
    $email: String!,
    $password: String!
  ) {
    register(
      data: {
        firstName: $firstName,
        lastName: $lastName,
        email: $email,
        password: $password
      }
    ) {
      firstName,
      lastName,
      email,
      name,
    }
  }
`;

export const userCreatedSubscription = gql`
  subscription {
    userCreated {
      name
    }
  }
`;