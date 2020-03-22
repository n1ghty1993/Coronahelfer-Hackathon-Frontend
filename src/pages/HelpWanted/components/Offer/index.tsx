import React, { FC, useState, useContext } from 'react';
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

  // create request
  const sendOffer = async () => {
    try {
      if (offer === '') throw new Error('No offer text given');

      if (!authCtx.auth || !authCtx.auth.authenticated) {
        throw new Error('You need to be logged in.');
      }

      let res = await callApi('/request', authCtx.auth.token as string, {
        offerText: offer,
        requestId,
      });

      if (res.error) throw new Error('Error while creating request.');

      // TODO: What todo if created
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form className="offer-form" onSubmit={sendOffer}>
      <textarea
        required
        placeholder="Nachricht *"
        onChange={ev => setOffer(ev.target.value)}
        value={offer}
      />
      <Button isPrimary={true} size="small" />
    </form>
  );
};

export default Offer;
