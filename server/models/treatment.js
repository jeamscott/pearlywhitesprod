const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var treatmentSchema = new Schema({
    id_number: {
    type: String,
    required: true
  },
    treatment_id: {
    type: String,
    required: true
    },
    description: {
    type: String,
    required: false
   },
    tooth_id: {
    type: String,
    required: true
    }

});
module.exports = mongoose.model('Treatment', treatmentSchema);