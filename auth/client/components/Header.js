import React from 'react';
import { Link } from 'react-router';

import { graphql } from 'react-apollo';

import { queryCurrentUser, mutationLogout } from '../queries';

const Header = ({ data, mutate: logout }) => {
  const logoutUser = event => {
    event.preventDefault();

    logout({}).then(() => data.refetch());
  };

  const renderButtons = () => {
    const { loading, currentUser: user } = data;

    if (loading) return null;

    if (user) {
      return (
        <li>
          <a onClick={logoutUser}>Log out</a>
        </li>
      );
    }

    return (
      <>
        <li>
          <Link to="/signup">Sign up</Link>
        </li>
        <li>
          <Link to="login">Log in</Link>
        </li>
      </>
    );
  };

  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="left brand-logo">
          Auth
        </Link>
        <ul id="nav-mobile" className="right hide-on-small-and-down">
          {renderButtons()}
        </ul>
      </div>
    </nav>
  );
};

export default graphql(mutationLogout)(graphql(queryCurrentUser)(Header));
