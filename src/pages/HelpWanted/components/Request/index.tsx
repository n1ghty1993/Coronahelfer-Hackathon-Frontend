import React, { FC } from 'react';

import './style.scss';

import { IRequest } from './types';

import Button from '../../../../components/Button';

interface IProps {
  request: IRequest;
  user: any;
  onClick: (requestId: string) => void;
}

const Request: FC<IProps> = ({
  request,
  user = {
    firstName: 'Anonym',
  },
  onClick,
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
        <Button onClick={() => onClick(request._id)} isPrimary={true}>
          Helfen
        </Button>
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
