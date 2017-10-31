const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: { type: String, required: true },
  full_name: { type: String, required: true },
  id: { type: Number, required: true, unique: true },
  profile_picture: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

module.exports = User;

module.exports.createUser = ({ username, full_name, id, profile_picture }) => {
  return User.create({ username, full_name, id, profile_picture }, (err, newUser) => {
    if (err) { console.error('Could not create new user', err); }
    return newUser;
  });
};
