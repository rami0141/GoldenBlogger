// The data model
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let Blogs = new Schema({
  title: {
    type: String
  },
  name: {
    type: String
  },
  topic: {
    type: String
  },
  imageLink: {
    type: String
  },
  summary: {
    type: String
  },
  blog: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Blogs', Blogs);
