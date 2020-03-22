export const callApi = async (
  url = '',
  token: string,
  data = {},
  method = 'GET',
) => {
  const server = process.env.REACT_APP_SERVER_URL;
  const response = await fetch(`http://coronahelfer.eu:3000/api/v1${url}`, {
    method,
    mode: 'cors',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
      'X-Access-Token': token,
    },
    body:
      method === 'POST' || method === 'PUT' ? JSON.stringify(data) : undefined, // body data type must match "Content-Type" header
  });
  return await response.json(); // parses JSON response into native JavaScript objects
};
