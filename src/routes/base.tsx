import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

export default function Base() {
  return (
    <BrowserRouter>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <div>Home</div>
          </Route>
          <Route path="/about">
            <div>About</div>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
