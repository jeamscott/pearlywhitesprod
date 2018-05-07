const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var accountingSchema = new Schema({
      id_number: {
        type: String,
        required: true
      },
      accountNumber: {
        type: String,
        required: true 
      },
      name: {
        type: String,
        required: false 
      },
      accountType: {
      type: String,
      required: false  
      },
      balance: {
         type: String,
         required: false
      }
    });
    module.exports = mongoose.model('Accounting', accountingSchema);