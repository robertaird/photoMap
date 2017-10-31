require('dotenv').config();
const express = require('express');
const mdb = require('./app/app.js');
const User = require('./app/models/user.js');
const request = require('./app/request-handlers.js');

const app = express();

const port = process.env.PORT || 8080;

// app.use(express.json());
// const router = express.Router();
// app.use('/', router);
// app.use('/map/', router);
// app.use('*', (req, res, next) => {
//   console.log('hello', req.path);
//   next();
// });

app.get('/map', (req, res) => {
  request.auth(req.query);
  res.send('hello');
});

app.use(express.static(`${__dirname}/public`));
// router.route('/', (req, res, next) => {
//   next();
// }).get((req, res) => {
//   res.send();
// });

// router.route('/map/', (req, res, next) => {
//   next();
// }).get((req, res) => {
//   console.log(req.url);
//   res.send('Hello!');
// });
console.log('Greetings!');

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

module.exports = app;
