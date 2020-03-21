import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import StartPage from '../../pages/StartPage';
import HelpWanted from '../../pages/HelpWanted';
import Login from '../../pages/Login';
import { Auth, IAuthContext } from '../App';

export default function Base() {
  const auth: IAuthContext = useContext(Auth);
  return (
    <Switch>
      <Route exact path="/">
        <StartPage />
      </Route>
      <Route path="/help">
        <div>Helfen!</div>
      </Route>
      <Route path="/get-help">
        <HelpWanted />
      </Route>
      <Route path="/information">
        <div>Informationen</div>
      </Route>
      <Route path="/contact">
        <div>Kontakt</div>
      </Route>
      {!auth.auth.authenticated && (
        <Route path="/login">
          <Login />
        </Route>
      )}
      <Redirect to="/" />
    </Switch>
  );
}
