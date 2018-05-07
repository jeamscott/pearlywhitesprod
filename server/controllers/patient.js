
var mongoose = require('mongoose');
const userModel = require('../models/users');
var User = mongoose.model('User');
const patientModel = require('../models/patients');
var Patient = mongoose.model('Patient');

module.exports.profileRead = function(req, res) {
  
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
        Patient.findOne({'user_name':user.email},
        'id_number first_name last_name phone_number street city state zip_code email_address visit_history user_name',
          function(err, patient) {
                if(err) {
                    res.status(404).json({"message" : "No record found"});
                    return;
                }
                res.status(200).json(patient);
          })
      });
  }
  
};


module.exports.profileWrite = function(req, res) {  
  if (!req.payload._id) {
    res.status(401).json({
      "message" : "UnauthorizedError: private profile"
    });
  } else {
    User
      .findById(req.payload._id)
      .exec(function(err, user) {
          if(err) {
            console.error(err);
              res.status(401).json({"message" : "UnauthorizedError: no matching record"});
              return;
          }
          Patient.findOneAndUpdate(
          {
            'user_name':user.email},
          {
            $set: { 'first_name': req.body.first_name, 'last_name': req.body.last_name, 'phone_number': req.body.phone_number, 'street': req.body.street, 'city': req.body.city, 'state': req.body.state, 'zip_code': req.body.zip_code, 'email_address': req.body.email_address },
          },
          {
            new: true
          },
            function(err, patient) {
                if(err) {
                    res.status(404).json({"message" : "No record found"});
                    return;
                }
                res.status(200).json(patient);
          })
      });
  }
};

module.exports.supportWrite = function(req, res) {  
 
  
          Patient.findOneAndUpdate(
            
          {
            'user_name':req.params.id},
          {
            $set: { 'first_name': req.body.first_name, 'last_name': req.body.last_name, 'phone_number': req.body.phone_number, 'street': req.body.street, 'city': req.body.city, 'state': req.body.state, 'zip_code': req.body.zip_code, 'email_address': req.body.email_address },
          },
          {
            new: true
          },
            function(err, patient) {
                if(err) {
                    res.status(404).json({"message" : "No record found"});
                    return;
                }
                res.status(200).json(patient);
          })
      };

module.exports.supportRead = function(req, res) {
  
  Patient.findOne({'user_name':req.params.id},
  'id_number first_name last_name phone_number street city state zip_code email_address visit_history user_name',
    function(err, patient) {
          if(err) {
              res.status(404).json({"message" : "No record found"});
              return;
          }
          
          res.status(200).json(patient);
    })
  
};
