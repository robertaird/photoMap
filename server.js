require('dotenv').config();
const express = require('express');
const mdb = require('./app/app.js');
const User = require('./app/models/user.js');
const Photos = require('./app/models/photo.js');
const request = require('./app/request-handlers.js');
const routes = require('./app/routes.js');

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

app.use(routes);

// app.get('/map', (req, res) => {
//   request.auth(req.query);
//   res.redirect('/main');
// });

// app.get('/main', (req, res) => {
//   res.redirect('/#!main');
// });

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
