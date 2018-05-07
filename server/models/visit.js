const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var visitSchema = new Schema({
  id_number: {
    type: String,
    required: true
  },
  visit_id: {
    type: String,
    required: false
  },
  treatment_id: {
    type: String,
    required: false
  },
  user_role: {
    type: String,
    required: false
  },
  location_id: {
    type: String,
    required: false
  }

});
module.exports = mongoose.model('Visit', visitSchema);