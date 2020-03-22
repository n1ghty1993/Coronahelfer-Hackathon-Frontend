import React, { FC, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Auth, IAuthContext } from '../../../../components/App';

import './style.scss';
import Button from '../../../../components/Button';
import { callApi } from '../../../../api/requests';

interface IProps {
  requestId: string;
}

const Offer: FC<IProps> = ({ requestId }) => {
  const authCtx: IAuthContext = useContext(Auth);

  const [offer, setOffer] = useState<string>('');
  const [success, setSuccess] = useState<Boolean>(false);

  // create request
  const sendOffer = async () => {
    try {
      if (offer === '') throw new Error('No offer text given');

      if (!authCtx.auth || !authCtx.auth.authenticated) {
        throw new Error('You need to be logged in.');
      }

      let res = await callApi(
        '/request/helper',
        authCtx.auth.token as string,
        {
          offerText: offer,
          requestId,
        },
        'POST',
      );

      if (res.error) throw new Error('Error while creating request.');

      setSuccess(true);

      // TODO: What todo if created
    } catch (e) {
      console.log(e);
    }
  };

  const auth: IAuthContext = useContext(Auth);

  // TO DO link zu Profil
  if (success) {
    return (
      <div className="offer-form">
        <div className="message-screen">
          <h2>DANKE FÜR DEINE NACHRICHT</h2>
          <p>Du wirst bestimmt bald kontaktiert!</p>
          <Link to="/profile">Zu deinen Hilfsangeboten</Link>
        </div>
      </div>
    );
  }

  if (!auth || !auth.auth.authenticated) {
    return (
      <div className="offer-form">
        <div className="message-screen">
          <h2>DANKE, DASS DU HELFEN WILLST</h2>
          <p>Um zu antworten, musst du angemeldet sein.</p>
          <Link
            to={{
              pathname: '/login',

              state: { from: '/help' },
            }}
          >
            Zum Login
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form className="offer-form">
      <textarea
        required
        placeholder="Nachricht *"
        onChange={ev => setOffer(ev.target.value)}
        value={offer}
      />
      <Button type="button" isPrimary={true} size="small" onClick={sendOffer}>
        Absenden
      </Button>
    </form>
  );
};

export default Offer;
