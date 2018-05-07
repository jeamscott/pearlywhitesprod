const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var appointmentSchema = new Schema({
    user_name: {
        type: String,
        required: true
      },
    app_date: {
        type: String,
        required: false
      },
    app_time: {
        type: String,
        required: false
      },
    app_location: {
        type: String,
        required: false
      },

      
    });
    module.exports = mongoose.model('Appointment', appointmentSchema);