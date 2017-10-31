const mongoose = require('mongoose');

const db = require('../config/db');

mongoose.connect(db.url);

const mdb = mongoose.connection;

mdb.on('error', console.error.bind(console, 'connection error:'));
mdb.once('open', () => {
  console.log('DB Connection Established!')
});
