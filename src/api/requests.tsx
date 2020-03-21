import { IAuthContext } from '../components/App';

export const callApi = async (
  url = '',
  auth?: IAuthContext,
  data = {},
  method = 'GET',
) => {
  if (!auth) {
    return;
  }

  const server = process.env.REACT_APP_SERVER_URL;
  const response = await fetch(`${server}/api/v1${url}`, {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
      'X-Access-Token': auth.auth.token as string,
    },
    body:
      method === 'POST' || method === 'PUT' ? JSON.stringify(data) : undefined, // body data type must match "Content-Type" header
  });
  return await response.json(); // parses JSON response into native JavaScript objects
};
