import React from 'react';
import { Link } from 'react-router';
import { graphql } from 'react-apollo';

import { querySongs } from '../queries';

class SongList extends React.Component {
  renderSongs() {
    return this.props.data.songs.map(song => (
      <li className="collection-item" key={song.id}>
        {song.title}
      </li>
    ));
  }

  render() {
    if (this.props.data.loading) return <div>Loading...</div>;

    return (
      <div>
        <ul className="collection">{this.renderSongs()}</ul>
        <Link to="/songs/new" className="btn-floating btn-large blue right">
          <i className="material-icons">add</i>
        </Link>
      </div>
    );
  }
}

export default graphql(querySongs)(SongList);
