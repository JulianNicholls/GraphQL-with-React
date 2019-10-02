import React, { useState } from 'react';

const AuthForm = ({ submitFunc, submitText, errors }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = event => {
    event.preventDefault();

    submitFunc(email, password);
  };

  return (
    <div className="row">
      <form className="col s6 offset-s3" onSubmit={onSubmit}>
        <div className="input-field">
          <input
            type="email"
            id="email"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
          <label className="active" htmlFor="email">
            Email
          </label>
        </div>

        <div className="input-field">
          <input
            type="password"
            id="password"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
          <label className="active" htmlFor="password">
            Password
          </label>
        </div>

        {errors.length > 0 && (
          <div className="errors">
            {errors.map(err => (
              <div key={err}>{err}</div>
            ))}
          </div>
        )}

        <button className="btn" type="submit">
          {submitText}
        </button>
      </form>
    </div>
  );
};

export default AuthForm;
