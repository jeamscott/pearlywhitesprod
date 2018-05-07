
var mongoose = require('mongoose');
const userModel = require('../models/users');
var User = mongoose.model('User');
const billingModel = require('../models/billing');
var Billing = mongoose.model('Billing');



module.exports.payBill = function(req, res) {
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
          console.log(user.name)
          Billing
            .findOne({'user_name':user.email})
            .exec(function(err, math) {
                if(err) {
                    res.status(404).json({"message" : "No record found"});
                    return;
                }
                new_balance = (math.balance_due-req.body.balance_due)

                Billing.findOneAndUpdate(
                  {
                    'user_name':user.email},
                  {
                    $set: { 'balance_due': (new_balance)},
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
          })
      });
  }
  
};



 