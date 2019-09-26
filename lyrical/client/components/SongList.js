import React from 'react';
import { Link } from 'react-router';
import { graphql } from 'react-apollo';

import { querySongs } from '../queries';

const SongList = ({ data }) => {
  const renderSongs = () => {
    return data.songs.map(song => (
      <li className="collection-item" key={song.id}>
        {song.title}
      </li>
    ));
  };

  if (data.loading) return <div>Loading...</div>;

  return (
    <div>
      <ul className="collection">{renderSongs()}</ul>
      <Link to="/songs/new" className="btn-floating btn-large blue right">
        <i className="material-icons">add</i>
      </Link>
    </div>
  );
};

export default graphql(querySongs)(SongList);
