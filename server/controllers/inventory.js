
var mongoose = require('mongoose');
const userModel = require('../models/users');
var User = mongoose.model('User');
const inventoryModel = require('../models/inventory');
var Inventory = mongoose.model('Inventory');

module.exports.getAll = function(req, res) {
  const _inventoryProjection = "item_name product_description quantity cost"

    
    Inventory
      .find({}, _inventoryProjection, (err, inventory) => {
        let inventorytArr = [];
        if (err) {
          return res.status(500).send({message: err.message});
        }
        if (inventory) {
          inventory.forEach(inventory => {
            inventorytArr.push(inventory);
          });
        }
        
        res.send(inventorytArr);
      });
  
  
};

module.exports.getInventory = function(req, res) {

  Inventory.findOne({'item_name':req.params.id},
  'item_name quantity cost',
    function(err, inventory) {
          if(err) {
              res.status(404).json({"message" : "No record found"});
              return;
          }
          res.status(200).json(inventory);
    })
}