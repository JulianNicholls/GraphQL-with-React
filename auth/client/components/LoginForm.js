import React, { useState, useEffect } from 'react';
import { hashHistory } from 'react-router';
import { graphql } from 'react-apollo';

import AuthForm from './AuthForm';

import { queryCurrentUser, mutationLogin } from '../queries';

const LoginForm = ({ data: { currentUser }, mutate: login }) => {
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    if (currentUser) hashHistory.push('/dashboard');
  }, [currentUser]);

  const loginUser = (email, password) => {
    login({
      variables: { email, password },
      refetchQueries: [{ query: queryCurrentUser }],
    }).catch(res => {
      setErrors(res.graphQLErrors.map(err => err.message));
    });
  };

  return (
    <div>
      <h4 className="center-align">Login</h4>
      <AuthForm submitFunc={loginUser} submitText={'Log in'} errors={errors} />
    </div>
  );
};

export default graphql(mutationLogin)(graphql(queryCurrentUser)(LoginForm));
