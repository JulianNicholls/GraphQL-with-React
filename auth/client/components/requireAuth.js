import React, { useEffect } from 'react';
import { hashHistory } from 'react-router';
import { graphql } from 'react-apollo';

import { queryCurrentUser } from '../queries';

export default WrappedComponent => {
  const RequireAuth = props => {
    const {
      data: { loading, currentUser },
    } = props;

    useEffect(() => {
      if (!loading && !currentUser) hashHistory.push('/login');
    }, [loading, currentUser]);

    return <WrappedComponent {...props} />;
  };

  return graphql(queryCurrentUser)(RequireAuth);
};
