const express = require('express');
const request = require('./request-handlers.js');

const app = express();

app.get('/map', (req, res) => {
  request.auth(req.query);
  res.redirect('/main');
});

app.get('/main', (req, res) => {
  res.redirect('/#!main');
});


module.exports = app;
