const mongoose = require("mongoose");
const { Schema } = mongoose;

const listSchema = new Schema({
  name: { type: String, required: true },
  articles: Array,
});

const userSchema = new Schema({
  googleId: { type: String, required: true, unique: true },
  lists: [listSchema],
});

const User = mongoose.model("user", userSchema);

module.exports = User;
