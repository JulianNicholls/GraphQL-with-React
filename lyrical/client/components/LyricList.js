import React from 'react';

const LyricList = ({ lyrics }) => {
  const renderLyrics = () => {
    return lyrics.map(({ id, content }) => (
      <li className="collection-item" key={id}>
        {content}
      </li>
    ));
  };

  return <ul className="collection">{renderLyrics()}</ul>;
};

export default LyricList;
