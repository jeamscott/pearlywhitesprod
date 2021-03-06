
var mongoose = require('mongoose');
const userModel = require('../models/users');
var User = mongoose.model('User');
const billingModel = require('../models/billing');
var Billing = mongoose.model('Billing');

module.exports.billingRead = function(req, res) {
  
  if (!req.payload._id) {
    res.status(401).json({
      "message" : "UnauthorizedError: private profile"
    });
  } else {
    
    User
      .findById(req.payload._id)
      .exec(function(err, user) {
          if(err) {
              res.status(401).json({"message" : "UnauthorizedError: no matching record"});
              return;
          }
          Billing.findOne({'user_name':user.email},
            'balance_due', 
            function(err, billing) {
                if(err) {
                    res.status(404).json({"message" : "No record found"});
                    return;
                }
                res.status(200).json(billing);
                
          })
      });
  }
  
};

module.exports.supportWrite = function(req, res) {  
 
  
  Billing.findOneAndUpdate(
    
  {
    'user_name':req.params.id},
  {
    $set: { 'balance_due': req.body.balance_due},
  },
  {
    new: true
  },
    function(err, billing) {
        if(err) {
            res.status(404).json({"message" : "No record found"});
            return;
        }
        res.status(200).json(billing);
  })
};

module.exports.supportRead = function(req, res) {

Billing.findOne({'user_name':req.params.id},
'balance_due',
function(err, patient) {
  if(err) {
      res.status(404).json({"message" : "No record found"});
      return;
  }
  
  res.status(200).json(patient);
})

};