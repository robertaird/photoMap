const mongoose = require('mongoose');

const userSchema = mongoose.schema({
  username: { type: String, require: true },
});

module.exports = mongoose.model('User', userSchema);
