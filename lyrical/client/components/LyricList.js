import React from 'react';
import { graphql } from 'react-apollo';

import { mutationLikeLyric } from '../queries';

const LyricList = ({ lyrics, mutate }) => {
  const renderLyrics = () => {
    const like = (id, likes) => {
      mutate({
        variables: { id },
        optimisticResponse: {
          __typename: 'Mutation',
          likeLyric: {
            __typename: 'LyricType',
            id,
            likes,
          },
        },
      });
    };

    return lyrics.map(({ id, content, likes }) => (
      <li className="collection-item" key={id}>
        {content}
        <div className="vote-box">
          <i
            className="material-icons green-text darken-2"
            onClick={() => like(id, likes + 1)}
          >
            thumb_up
          </i>
          {likes}
        </div>{' '}
      </li>
    ));
  };

  return <ul className="collection">{renderLyrics()}</ul>;
};

export default graphql(mutationLikeLyric)(LyricList);
