// @flow
/* eslint quote-props: "off"*/
const request = require('request');
const Task = require('data.task');

const env = require('../../config/env');


// Passwordless Login Task Configuration

const passwordlessLoginUrl: string =
  '/passwordless/start';


const sendCodeOptions = email => ({
  url: `https:// ${env.AUTH0_DOMAIN}  ${passwordlessLoginUrl}`,
  method: 'POST',
  headers: { 'content-type': 'application/json' },
  body: { 'client_id': env.AUTH0_CLIENT_ID,
          'connection': 'email',
          'email': email,
          'send': 'code',
          'scope': 'openid',
        },
  json: true,
});

const passwordlessLogin = email =>
  new Task((rej, res) =>
    request(sendCodeOptions(email), (error, response, body) =>
      (error ? rej(error) : res(body))
    )
);

export { passwordlessLogin } ;
