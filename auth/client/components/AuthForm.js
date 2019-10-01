import React, { useState } from 'react';

const AuthForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="row">
      <form className="col s6 offset-s3">
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
        </div>

        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input
            type="password"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
        </div>
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AuthForm;
