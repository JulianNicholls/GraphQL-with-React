import React from 'react';
import { Link } from 'react-router';
import { graphql } from 'react-apollo';

import LyricCreate from './LyricCreate';
import LyricList from './LyricList';
import { querySong } from '../queries';

const SongDetail = ({ data }) => {
  const { song } = data;

  if (data.loading) return <div>Loading...</div>;

  return (
    <div>
      <Link to="/">Back</Link>
      <h3>{song.title}</h3>

      <LyricList lyrics={song.lyrics} />

      <LyricCreate songId={song.id} />
    </div>
  );
};

export default graphql(querySong, {
  options: ({ params }) => ({ variables: { id: params.id } }),
})(SongDetail);
