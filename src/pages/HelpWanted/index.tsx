import React, { FC, useState, useEffect } from 'react';

import './style.scss';

import Body from '../../components/Body';
import Header from '../../components/Header';
import Request from './components/Request';

import { IRequest } from './components/Request/types';

const callApi = async (url = '', data = {}, method = 'GET') => {
  const response = await fetch(`http://localhost:3000/api/v1${url}`, {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
      'X-Access-Token':
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTc2MTFhN2MwNmE5NjI0NjBjNWMzMWQiLCJlbWFpbCI6ImFydW5AZXhhbXBsZS5jb20iLCJpYXQiOjE1ODQ4MTAzNTksImV4cCI6MTU4NDg5Njc1OX0._LAV-6eCc0-83j_GFryk6qaCgWeCGM-7hgU5RHyyE9I',
    },
    body:
      method === 'POST' || method === 'PUT' ? JSON.stringify(data) : undefined, // body data type must match "Content-Type" header
  });
  return await response.json(); // parses JSON response into native JavaScript objects
};

const Nav: FC = () => {
  const [requests, setRequests] = useState<Array<IRequest>>([]);

  useEffect(() => {
    const fetchRequests = async () => {
      const result = await callApi('/request');
      setRequests(result.result);
    };
    fetchRequests();
  }, []);

  return (
    <div className="RequestPage">
      <Header>
        <h1>Gesuche</h1>
      </Header>
      <Body>
        {requests.map(request => (
          <Request key={request.title} user={undefined} request={request} />
        ))}
      </Body>
    </div>
  );
};

export default Nav;
