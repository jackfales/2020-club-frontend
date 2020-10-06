import React, { useState } from 'react';
import { Auth } from 'aws-amplify';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errMessage, setErrMessage] = useState('');

  const signInClick = async () => {
    try {
      await Auth.signIn(email, password);
    } catch (error) {
      setErrMessage(error.message);
    }
  };

  return (
    <div className="SignIn">
      <input type="text" name="email" placeholder="input email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" name="password" placeholder="input password" onChange={(e) => setPassword(e.target.value)} />

      <button type="submit" onClick={signInClick}>Sign In </button>

      <h3>{errMessage}</h3>

    </div>
  );
}
