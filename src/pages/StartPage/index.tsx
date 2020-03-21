import React from 'react';
import './style.scss';

import Button from '../../components/Button';

function StartPage() {
  return (
    <div className="StartPage">
      <header>
        <h1>Gemeinsam Helfen</h1>
        <div className="button-bar">
          <Button style={{ marginRight: 30 }}>Ich brauche Hilfe</Button>
          <Button>Ich möchte helfen</Button>
        </div>
      </header>
      <div className="body">
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
      </div>
    </div>
  );
}

export default StartPage;
