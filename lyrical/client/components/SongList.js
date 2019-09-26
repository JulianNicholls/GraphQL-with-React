import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class SongList extends React.Component {
  render() {
    console.log(this.props);

    return (
      <div>
        <h2>SongList</h2>
      </div>
    );
  }
}

const query = gql`
  query {
    songs {
      title
    }
  }
`;

export default graphql(query)(SongList);
