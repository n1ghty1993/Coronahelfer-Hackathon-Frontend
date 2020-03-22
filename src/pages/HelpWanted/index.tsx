import React, { FC, useState, useEffect, useContext } from 'react';

import './style.scss';

import { callApi } from '../../api/requests';

import { Auth, IAuthContext } from '../../components/App';
import Body from '../../components/Body';
import Header from '../../components/Header';
import Request from './components/Request';

import { IRequest } from './components/Request/types';

const HelpWanted: FC = () => {
  const auth: IAuthContext = useContext(Auth);

  const [requests, setRequests] = useState<Array<IRequest>>([]);

  useEffect(() => {
    const fetchRequests = async () => {
      const result = await callApi('/request', auth.auth.token as string);
      console.log(result);
      setRequests(result.result);
    };

    try {
      fetchRequests();
    } catch (err) {
      console.log(err);
    }
  }, [auth]);

  return (
    <div className="RequestPage">
      <Header>
        <h1>Gesuche</h1>
      </Header>
      <Body>
        {requests.map(request => (
          <Request key={request.title} user={undefined} request={request} />
        ))}
        {!requests.length && <article>Momentan gibt es keine Gesuche!</article>}
      </Body>
    </div>
  );
};

export default HelpWanted;
