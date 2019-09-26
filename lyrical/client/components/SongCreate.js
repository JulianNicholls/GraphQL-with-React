import React from 'react';
import { Link, hashHistory } from 'react-router';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

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

const mutationAddSong = gql`
  mutation AddSong($title: String!) {
    addSong(title: $title) {
      id
    }
  }
`;

export default graphql(mutationAddSong)(SongCreate);
