import React from 'react';
import { Switch, Route } from 'react-router-dom';

import StartPage from '../../pages/StartPage';
import HelpWanted from '../../pages/HelpWanted';
import Login from '../../pages/Login';

export default function Base() {
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
      <Route path="/login">
        <Login />
      </Route>
    </Switch>
  );
}
