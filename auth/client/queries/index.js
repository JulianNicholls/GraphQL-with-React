import gql from 'graphql-tag';

// gql validates the graphql query or mutation text when it is created.
// I had a typo in mutation Logout, which manifested itself as soon as I
// called the first currentUser query in the header and it took me a
// while to realise that the error was there and not with the
// currentUser query.

export const queryCurrentUser = gql`
  query CurrentUser {
    currentUser {
      id
      email
    }
  }
`;

export const mutationSignup = gql`
  mutation Signup($email: String!, $password: String!) {
    signup(email: $email, password: $password) {
      id
      email
    }
  }
`;

export const mutationLogin = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      email
    }
  }
`;

export const mutationLogout = gql`
  mutation logout {
    logout {
      id
    }
  }
`;
