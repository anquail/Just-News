const mongoose = require('mongoose');
const { Schema } = mongoose;

const articleSchema = new Schema({
  source: {
    id: String,
    name: String,
  },
  author: String,
  title: String,
  description: String,
  url: String,
  urlToImage: String,
  publishedAt: String,
  content: String,
});

const Article = mongoose.model('article', articleSchema);

module.exports = Article;
