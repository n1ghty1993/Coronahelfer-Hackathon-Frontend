import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

import Body from '../../components/Body';
import Button from '../../components/Button';
import Header from '../../components/Header';

function StartPage() {
  return (
    <div className="StartPage">
      <Header>
        <h1>Gemeinsam Helfen</h1>
        <div className="button-bar">
          <Link to="/get-help">
            <Button style={{ marginRight: 30 }}>Ich brauche Hilfe</Button>
          </Link>
          <Link to="/help">
            <Button>Ich möchte helfen</Button>
          </Link>
        </div>
      </Header>
      <Body>
        <article>
          <h2>Was machen wir?</h2>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
        </article>
      </Body>
    </div>
  );
}

export default StartPage;
