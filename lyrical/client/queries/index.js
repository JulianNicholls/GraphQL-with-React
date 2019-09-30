import gql from 'graphql-tag';

export const querySongList = gql`
  query SongList {
    songs {
      id
      title
    }
  }
`;

export const querySong = gql`
  query Song($id: ID!) {
    song(id: $id) {
      id
      title
      lyrics {
        id
        content
      }
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

export const mutationDeleteSong = gql`
  mutation DeleteSong($id: ID!) {
    deleteSong(id: $id) {
      id
    }
  }
`;

export const mutationAddLyric = gql`
  mutation AddLyric($songId: ID!, $content: String) {
    addLyricToSong(songId: $songId, content: $content) {
      id
      lyrics {
        id
        content
      }
    }
  }
`;
