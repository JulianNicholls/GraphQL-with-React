import React from 'react';
import { Link } from 'react-router';
import { graphql } from 'react-apollo';

import { querySong } from '../queries';

const SongDetail = ({ data }) => {
  const { song } = data;

  return (
    <div>
      <Link to="/">Back</Link>
      {data.loading ? <div>Loading...</div> : <h3>{song.title}</h3>}
    </div>
  );
};

export default graphql(querySong, {
  options: ({ params }) => ({ variables: { id: params.id } }),
})(SongDetail);
