const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var employeeSchema = new Schema({
    user_name: {
        type: String,
        required: true
      },
    employee_status: {
        type: Boolean,
        required: true
      },

      
    });
    module.exports = mongoose.model('Employee', employeeSchema);