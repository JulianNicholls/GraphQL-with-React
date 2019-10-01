import React from 'react';
import { graphql } from 'react-apollo';

import { queryCurrentUser } from '../queries';

const Header = ({ data }) => {
  return (
    <div>
      Header -{' '}
      {data.loading
        ? 'Loading'
        : data.currentUser
        ? 'None'
        : data.currentUser.email}
    </div>
  );
};

export default graphql(queryCurrentUser)(Header);
