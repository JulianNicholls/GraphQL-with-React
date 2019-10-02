import React, { useState } from 'react';
import { hashHistory } from 'react-router';
import { graphql } from 'react-apollo';

import AuthForm from './AuthForm';

import { mutationLogin, queryCurrentUser } from '../queries';

const LoginForm = ({ mutate: login }) => {
  const [errors, setErrors] = useState([]);

  const loginUser = (email, password) => {
    login({
      variables: { email, password },
      refetchQueries: [{ query: queryCurrentUser }],
    })
      .then(() => hashHistory.push('/'))
      .catch(res => {
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

export default graphql(mutationLogin)(LoginForm);
