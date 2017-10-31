require('dotenv').config();
const express = require('express');
const mdb = require('./app/app.js');
const User = require('./app/models/user.js');

const app = express();

const port = process.env.PORT || 8080;

app.use(express.json());
const router = express.Router();
app.use(express.static(`${__dirname}/public`));
app.use('/', router);
// app.engine('.html');

router.route('/', (req, res, next) => {
  next();
}).get((req, res) => {
  console.log('hello');
  res.send();
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

module.exports = app;
