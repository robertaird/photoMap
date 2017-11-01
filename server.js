require('dotenv').config();
const express = require('express');
const mdb = require('./app/app.js');
const User = require('./app/models/user.js');
const Photos = require('./app/models/photo.js');
const request = require('./app/request-handlers.js');
const routes = require('./app/routes.js');

const app = express();

const port = process.env.PORT || 8080;

app.use(express.json());

app.use(routes);

app.use(express.static(`${__dirname}/public`));

console.log('Greetings!');

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

module.exports = app;
