import React, { FC } from 'react';
import './style.scss';

import { IRequest } from './types';

import Button from '../../../../components/Button';

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
  const address = request.address;

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
            {user.firstName} in {address.plz} - {address.city}
          </sub>
        </div>
        <Button isPrimary={true}>Helfen</Button>
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
