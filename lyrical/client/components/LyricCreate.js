import React, { useState } from 'react';
import { graphql } from 'react-apollo';

import { mutationAddLyric } from '../queries';

const LyricCreate = ({ songId, mutate }) => {
  const [content, setContent] = useState('');

  const addLyric = event => {
    event.preventDefault();

    mutate({ variables: { songId, content } }).then(() => {
      setContent('');
    });
  };

  return (
    <form onSubmit={addLyric}>
      <label htmlFor="lyric">Add a Lyric</label>
      <input
        type="text"
        id="content"
        value={content}
        onChange={event => setContent(event.target.value)}
      />
    </form>
  );
};

export default graphql(mutationAddLyric)(LyricCreate);
