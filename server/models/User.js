const mongoose = require('mongoose');
const { Schema } = mongoose;

const articleSchema = new Schema({
  author: String,
  content: String,
  description: String,
  publishedAt: String,
  source: Object,
  title: { type: String, unique: true },
  url: String,
  urlToImage: String,
});

const userSchema = new Schema({
  googleId: { type: String, required: true, unique: true },
  favorites: [articleSchema],
  // lists: Array,
});

const User = mongoose.model('user', userSchema);

module.exports = User;
