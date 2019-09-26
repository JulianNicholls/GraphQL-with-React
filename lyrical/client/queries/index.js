import gql from 'graphql-tag';

export const querySongs = gql`
  query {
    songs {
      id
      title
    }
  }
`;

export const mutationAddSong = gql`
  mutation AddSong($title: String!) {
    addSong(title: $title) {
      id
    }
  }
`;
