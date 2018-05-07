const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var patientSchema = new Schema({
  id_number: {
    type: String,
    required: false
  },
  first_name: {
    type: String,
    required: false    
  },
  last_name: {
    type: String,
    required: false
  },
  phone_number: {
    type: String,
    required: false 
  },
  street: {
    type: String,
    required: false
  },
  city: {
    type: String,
    required: false
  },
  state: {
    type: String,
    required: false
  },
  zip_code: {
    type: String,
    required: false
  },
  email_address: {
    type: String,
    required: false
  },
  visit_history: {
    type: Date,
    required: false
  },
  user_name: {
    type: String,
    required: true,
    unique: true
  }

});
module.exports = mongoose.model('Patient', patientSchema);