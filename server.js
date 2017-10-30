const express = require('express');

const app = express();

const port = process.env.PORT || 8080;

app.use(express.json());
// const router = express.Router();

app.use(express.static(`${__dirname}/public`));

app.get('/', (req, res) => {
  res.send('public/index.html');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

module.exports = app;
