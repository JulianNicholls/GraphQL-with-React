import React from 'react';
import { graphql } from 'react-apollo';

import { queryCurrentUser } from '../queries';

const Header = ({ data }) => {
  console.log(data);

  return (
    <div>
      Header -{' '}
      {data.loading
        ? 'Loading'
        : data.currentUser
        ? data.currentUser.email
        : 'None'}
    </div>
  );
};

export default graphql(queryCurrentUser)(Header);
