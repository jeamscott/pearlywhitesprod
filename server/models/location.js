const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var locationSchema = new Schema({
  id_number: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  zip: {
    type: String,
    required: false
  }

});
module.exports = mongoose.model('Location', locationSchema);