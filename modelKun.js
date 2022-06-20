const mongoose = require('mongoose');

const kunSchema = new mongoose.Schema({
  title: String,
  url: String,
  img: String
});

const KUN = mongoose.model('kunuz', kunSchema);

module.exports = KUN;
