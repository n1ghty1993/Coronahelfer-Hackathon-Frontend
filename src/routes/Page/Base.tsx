import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Menu from './Menu';

export default function Base() {
  return (
    <BrowserRouter>
      <div>
        <Menu />

        <hr />

        <Switch>
          <Route exact path="/help">
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
      </div>
    </BrowserRouter>
  );
}
