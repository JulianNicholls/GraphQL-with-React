import React from 'react';
import { Link } from 'react-router';
import { graphql } from 'react-apollo';

import { querySongs, mutationDeleteSong } from '../queries';

const SongList = ({ data, mutate }) => {
  const deleteSong = id => {
    mutate({
      variables: { id },
    }).then(() => data.refetch());
  };

  const renderSongs = () => {
    return data.songs.map(({ id, title }) => (
      <li className="collection-item" key={id}>
        {title}
        <i className="material-icons red-text" onClick={() => deleteSong(id)}>
          delete
        </i>
      </li>
    ));
  };

  if (data.loading) return <div>Loading...</div>;

  return (
    <div>
      <ul className="collection">{renderSongs()}</ul>
      <Link
        to="/songs/new"
        className="btn-floating btn-large blue darken-1 right"
      >
        <i className="material-icons">add</i>
      </Link>
    </div>
  );
};

export default graphql(mutationDeleteSong)(graphql(querySongs)(SongList));
