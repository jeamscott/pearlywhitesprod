const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var billingSchema = new Schema({
    user_name: {
        type: String,
        required: true
      },
    balance_due: {
        type: Number,
        required: false
      },

      
    });
    module.exports = mongoose.model('Billing', billingSchema);