import React from 'react';
import { Link, hashHistory } from 'react-router';
import { graphql } from 'react-apollo';

import { querySongs, mutationAddSong } from '../queries';

class SongCreate extends React.Component {
  constructor() {
    super();

    this.state = {
      title: '',
    };
  }

  addSong(event) {
    event.preventDefault();

    this.props
      .mutate({
        variables: {
          title: this.state.title,
        },
        refetchQueries: [{ query: querySongs }],
      })
      .then(() => {
        hashHistory.push('/');
      });
  }

  render() {
    const { title } = this.state;

    return (
      <div>
        <Link to="/">Back</Link>
        <h3>Create a new song</h3>
        <form onSubmit={this.addSong.bind(this)}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={event => this.setState({ title: event.target.value })}
          />
        </form>
      </div>
    );
  }
}

export default graphql(mutationAddSong)(SongCreate);
