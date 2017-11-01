const express = require('express');
const request = require('./request-handlers.js');
const User = require('./models/user.js');
const Photos = require('./models/photo.js');

const app = express();

app.use(express.json());

app.get('/users', (req, res) => {
  console.log(req.query);
  const { id } = req.query;
  User.find({ id })
    .then((found) => {
      console.log(found, 'inside /users');
      res.send(found[0]);
    });
});

app.get('/photos', (req, res) => {
  console.log(req.query);
  const { id } = req.query;
  Photos.find({ user_id: id })
    .then((found) => {
      console.log(found, 'inside /photos');
      res.send({ photos: found });
    });
});

app.get('/map', (req, res) => {
  request.auth(req.query, (user) => {
    const { id } = user[0];
    // console.log(user[0].id, id);
    // res.append('Current-User', user.id);
    res.redirect(`/main?id=${id}`);
  });
});

app.get('/main*', (req, res) => {
  const { id } = req.query;
  // console.log(id);
  res.redirect(`/#!main?user=${id}`);
});


module.exports = app;
