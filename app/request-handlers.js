const redirect = require('../config/redirect.js');
const request = require('request');

/*
curl -F 'client_id=CLIENT_ID' \
    -F 'client_secret=CLIENT_SECRET' \
    -F 'grant_type=authorization_code' \
    -F 'redirect_uri=AUTHORIZATION_REDIRECT_URI' \
    -F 'code=CODE' \
*/

const authRequest = ({ code }) => {
  const options = {
    url: 'https://api.instagram.com/oauth/access_token',
    crossDomain: true,
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    form: {
      code,
      client_id: process.env.INSTAGRAM_ID,
      client_secret: process.env.INSTAGRAM_SECRET,
      redirect_uri: redirect.url,
      grant_type: 'authorization_code',
    },
  };
  console.log(options);

  request.post(options, (err, res, bod) => {
    if (err) {
      console.error('Something did not go as planned!', err);
    } else {
      console.log(bod);
    }
  });
}

module.exports.auth = authRequest;
