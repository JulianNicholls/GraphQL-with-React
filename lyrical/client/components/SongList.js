import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class SongList extends React.Component {
  renderSongs() {
    return this.props.data.songs.map(song => (
      <li className="collection-item" key={song.id}>
        {song.title}
      </li>
    ));
  }

  render() {
    console.log(this.props);
    if (this.props.data.loading) return <div>Loading...</div>;

    return (
      <div>
        <ul className="collection">{this.renderSongs()}</ul>
      </div>
    );
  }
}

const query = gql`
  query {
    songs {
      id
      title
    }
  }
`;

export default graphql(query)(SongList);
