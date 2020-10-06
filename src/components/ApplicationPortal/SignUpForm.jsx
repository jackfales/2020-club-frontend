import React, { useState } from 'react';
import { Auth } from 'aws-amplify';

export default () => {
  const [state, setState] = useState({
    email: '',
    password: '',
    errorMsg: '',
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.id]: e.target.value,
    });
  };

  const signUp = async () => {
    const { email, password } = state;
    try {
      await Auth.signUp({
        username: email,
        password,
        attributes: {
          email,
        },
      });

      console.log('Successfully signed up');
    } catch (err) {
      console.log('Error signing up', err);
      setState({
        ...state,
        errorMsg: err.message,
      });
    }
  };

  const { password } = state;
  const isEnabled = password.length > 7;

  return (
    <div>
      <p>{state.errorMsg}</p>
      <input type="email" id="email" placeholder="Enter email" value={state.email} onChange={handleChange} />
      <input type="password" id="password" placeholder="password" value={state.password} onChange={handleChange} />
      <p>
        {password.length > 7 ? (<span role="img" aria-label="check">&#9989;</span>) : (<span role="img" aria-label="cross">&#10060;</span>)}
        password must be 8 characters
      </p>
      <button type="submit" disabled={!(isEnabled)} onClick={signUp}>Sign up</button>
    </div>
  );
};
