import { request } from 'http';

const options = {
  hostname: '192.168.43.51',
  port: 10000,
  method: 'GET',
  path: '/hello', // Correct property name is 'path' instead of 'pathname'
};

const client = request(options, (response) => {
  let body = '';

  response.on('data', (chunk) => {
    body += chunk;
  });

  response.on('end', () => {
    console.log(body);
  });
});

client.on('error', (error) => {
  console.error(`Error: ${error.message}`);
});

client.end(); 