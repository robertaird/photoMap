const redirect = require('../config/redirect.js');
const request = require('request');
const User = require('./models/user.js');
const Photos = require('./models/photo.js');

/*
curl -F 'client_id=CLIENT_ID' \
    -F 'client_secret=CLIENT_SECRET' \
    -F 'grant_type=authorization_code' \
    -F 'redirect_uri=AUTHORIZATION_REDIRECT_URI' \
    -F 'code=CODE' \
*/

const imageRequest = (accessToken) => {
  console.log(accessToken);
  const options = {
    url: `https://api.instagram.com/v1/users/self/media/recent/?access_token=${accessToken}`,
    method: 'GET',
  };

  request.get(options, (err, res, bod) => {
    if (err) { console.error('Unable to fetch!', err); }
    const parsed = JSON.parse(bod);
    const hasLocation = parsed.data
      .filter(photo => !!photo.location)
      .map((photo) => {
        if (photo.caption === null) {
          photo.caption = { text: undefined };
        }
        return photo;
      });
    Photos.savePhotos(hasLocation);
  });
};

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

  request.post(options, (err, res, bod) => {
    if (err) {
      console.error('Something did not go as planned!', err);
    } else {
      console.log(typeof bod);
      const { access_token, user } = JSON.parse(bod);
      User.find({ id: user.id })
        .then((found) => {
          console.log(found, found.length);
          if (found.length === 0) {
            return User.createUser(user);
          }
          return found;
        });
      imageRequest(access_token);
    }
  });
};

module.exports.auth = authRequest;
