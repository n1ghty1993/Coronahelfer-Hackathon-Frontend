import React from 'react';
import { Switch, Route } from 'react-router-dom';

import StartPage from '../../pages/StartPage';

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
        <div>Hilfe bekommen</div>
      </Route>
      <Route path="/information">
        <div>Informationen</div>
      </Route>
      <Route path="/contact">
        <div>Kontakt</div>
      </Route>
      <Route path="/login">
        <div>Login</div>
      </Route>
    </Switch>
  );
}
