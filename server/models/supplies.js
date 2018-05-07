const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var suppliesSchema = new Schema({
  id_number: {
    type: String,
    required: false
  },
  item_name: {
    type: String,
    required: false    
  },
  quantity: {
    type: String,
    required: false
   }

});
module.exports = mongoose.model('Supplies', suppliesSchema);