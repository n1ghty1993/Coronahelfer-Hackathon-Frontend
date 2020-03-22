import React, { FC } from 'react';
import { PortalWithState } from 'react-portal';
import './style.scss';

import { IRequest } from './types';

import Button from '../../../../components/Button';
import Offer from '../Offer';

interface IProps {
  request: IRequest;
  user: any;
}

const Request: FC<IProps> = ({
  request,
  user = {
    firstName: 'Anonym',
  },
}) => {
  return (
    <article className="request">
      <header>
        <span className="avatar">
          {user.image ? (
            <img src={user.image} alt={`Foto von ${user.firstName}`} />
          ) : (
            <span className="placeholder">{user.firstName[0]}</span>
          )}
        </span>
        <div className="intro">
          <h2>{request.title}</h2>
          <sub>
            {user.firstName} wartet {request.distance} Meter entfernt auf deine
            Hilfe!
          </sub>
        </div>
        <PortalWithState closeOnOutsideClick closeOnEsc>
          {({ openPortal, closePortal, isOpen, portal }) => (
            <React.Fragment>
              <Button onClick={openPortal} isPrimary={true}>
                Helfen
              </Button>

              {portal(<Offer requestId={request._id} />)}
            </React.Fragment>
          )}
        </PortalWithState>
      </header>
      <p>
        <strong>Kategorie:</strong> {request.category}
      </p>
      <p>
        <strong>Gesuch:</strong> {request.description}
      </p>
    </article>
  );
};

export default Request;
