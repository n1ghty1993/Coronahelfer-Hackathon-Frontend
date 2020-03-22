import React, { FC } from 'react';

import '../../styles/static-page.scss';
import Body from '../../components/Body';
import Header from '../../components/Header';

const Impressum: FC = () => {
  return (
    <div className="Impressum">
      <Header>
        <h1>Impressum</h1>
      </Header>
      <Body>
        <article>
          <h2>Diensteanbieter</h2>
          <p>
            David Louis
            <br />
            Mozartstraße 5<br />
            69214 Eppelheim
            <br />
            Deutschland
          </p>
        </article>
        <article>
          <h2>Kontaktmöglichkeiten</h2>
          <p>
            <strong>E-Mail-Adresse:</strong> info@coronahelfer.eu
          </p>
        </article>
        <article>
          <h2>Social Media und andere Onlinepräsenzen</h2>
          <p>
            Dieses Impressum gilt auch für die folgenden Social-Media-Präsenzen
            und Onlineprofile:
          </p>
          <ul>
            <li>
              <a href="https://www.facebook.com/coronahelfer.eu/">
                https://www.facebook.com/coronahelfer.eu/
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/coronahelfer.eu/">
                https://www.instagram.com/coronahelfer.eu/
              </a>
            </li>
            <li>
              <a href="https://twitter.com/CoronahelferE">
                https://twitter.com/CoronahelferE
              </a>
            </li>
          </ul>
        </article>
        <article>
          <h2>Haftungs- und Urheberrechtshinweise</h2>
          <p>
            <strong>Links auf fremde Webseiten:</strong> Inhalte fremder
            Webseiten, auf die wir direkt oder indirekt verweisen, liegen
            außerhalb unseres Verantwortungsbereiches und machen wir uns nicht
            zu Eigen. Für alle Inhalte und insbesondere für Schäden, die aus der
            Nutzung der in den verlinkten Webseiten aufrufbaren Informationen
            entstehen, haftet allein der Anbieter der verlinkten Webseiten.
          </p>
          <p>
            <a href="https://datenschutz-generator.de/?l=de">
              Erstellt mit kostenlosem Datenschutz-Generator.de von Dr. Thomas
              Schwenke
            </a>
          </p>
        </article>
      </Body>
    </div>
  );
};

export default Impressum;
