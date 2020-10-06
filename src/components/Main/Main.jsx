import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import { Auth } from 'aws-amplify';
import ClubPage from '../ClubPage/ClubPage';

export default () => (
  <div className="App">
    <Switch>
      <Route
        exact
        path="/"
        render={() => (
          <ClubPage />
        )}
      />
    </Switch>
  </div>
);
