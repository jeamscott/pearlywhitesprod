const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var inventorySchema = new Schema({
          
    item_name: {
        type: String,
        required: true
      },
    product_description: {
        type: String,
        required: true
    },
    quantity: {
        type: String,
        required: true
    },
    cost: {
        type: String,
        required: false
    }
      
    });
    module.exports = mongoose.model('Inventory', inventorySchema);