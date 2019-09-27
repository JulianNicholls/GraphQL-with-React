import React, { useState } from 'react';
import { Link, hashHistory } from 'react-router';
import { graphql } from 'react-apollo';

import { querySongs, mutationAddSong } from '../queries';

const SongCreate = ({ mutate }) => {
  const [title, setTitle] = useState('');

  const addSong = event => {
    event.preventDefault();

    mutate({
      variables: { title: title },
      refetchQueries: [{ query: querySongs }],
    }).then(() => hashHistory.push('/'));
  };

  return (
    <div>
      <Link to="/">Back</Link>
      <h3>Create a new song</h3>
      <form onSubmit={addSong}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />
      </form>
    </div>
  );
};

export default graphql(mutationAddSong)(SongCreate);
