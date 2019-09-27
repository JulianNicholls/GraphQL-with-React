import React from 'react';
import { graphql } from 'react-apollo';

import { querySong } from '../queries';

const SongDetail = ({ data }) => {
  console.log(data);

  return (
    <div>
      <h3>
        Song Detail -{' '}
        <small>{data.loading ? 'Loading...' : data.song.title}</small>
      </h3>
    </div>
  );
};

export default graphql(querySong, {
  options: ({ params }) => ({ variables: { id: params.id } }),
})(SongDetail);
