const mongoose = require('mongoose');

const photoSchema = mongoose.Schema({
  user_id: { type: String, required: true },
  caption: { type: String },
  id: { type: String, required: true, unique: true },
  images: {
    standard_resolution: { type: String, required: true },
    thumbnail: { type: String, required: true },
  },
  link: { type: String, required: true },
  location: {
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
    name: { type: String },
  },
});

const Photo = mongoose.model('Photo', photoSchema);

module.exports = Photo;

module.exports.savePhotos = (photos) => {
  photos.map(({
    caption: { text },
    id,
    images: {
      standard_resolution,
      thumbnail,
    },
    link,
    location: {
      latitude,
      longitude,
      name,
    },
    user,
  }) => Photo.create({
    caption: text,
    id,
    images: {
      standard_resolution: standard_resolution.url,
      thumbnail: thumbnail.url,
    },
    link,
    location: {
      latitude,
      longitude,
      name,
    },
    user_id: user.id,
  }, (err, newPhoto) => {
    if (err) { console.error('Could not add photo', err); }
    return newPhoto;
  }));
};
