import React from 'react';
import { graphql } from 'react-apollo';

import AuthForm from './AuthForm';

import { mutationLogin } from '../queries';

const LoginForm = ({ mutate }) => {
  return (
    <div>
      <h4 className="center-align">Login</h4>
      <AuthForm />
    </div>
  );
};

export default graphql(mutationLogin)(LoginForm);
