import React, { useState } from 'react';
import { Auth } from 'aws-amplify';

export default () => {
  const [errMessage, setErrMessage] = useState('');

  const handleLogout = async () => {
    try {
      await Auth.signOut();
    } catch (e) {
      console.log('signout failed');
      setErrMessage(e.message);
    }
  };

  return (
    <div>
      <button type="button" onClick={handleLogout}> Sign Out</button>
      <h3>
        {errMessage}
      </h3>
    </div>
  );
};
