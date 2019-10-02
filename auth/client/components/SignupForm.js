import React, { useState } from 'react';
import { hashHistory } from 'react-router';
import { graphql } from 'react-apollo';

import AuthForm from './AuthForm';

import { mutationSignup, queryCurrentUser } from '../queries';

const SignupForm = ({ mutate: signup }) => {
  const [errors, setErrors] = useState([]);

  const signupUser = (email, password) => {
    if (password.length < 6) {
      setErrors([
        'You must enter a password of at least 6 characters',
        ...errors,
      ]);
    } else {
      signup({
        variables: { email, password },
        refetchQueries: [{ query: queryCurrentUser }],
      })
        .then(() => hashHistory.push('/'))
        .catch(res => {
          setErrors(res.graphQLErrors.map(err => err.message));
        });
    }
  };

  return (
    <div>
      <h4 className="center-align">Signup</h4>
      <AuthForm submitFunc={signupUser} submitText={'Sign up'} errors={errors} />
    </div>
  );
};

export default graphql(mutationSignup)(SignupForm);
