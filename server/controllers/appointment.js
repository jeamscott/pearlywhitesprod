

var mongoose = require('mongoose');
const userModel = require('../models/users');
var User = mongoose.model('User');
const appointmentModel = require('../models/appointments');
var Appointment = mongoose.model('Appointment');

module.exports.appointmentRead = function(req, res) {
  
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
          Appointment.findOne({'user_name':user.email},
            'user_name app_date app_time app_location', 
            function(err, appointment) {
                if(err) {
                    res.status(404).json({"message" : "No record found"});
                    return;
                }
                res.status(200).json(appointment);
          })
      });
  }
  
};


module.exports.appointmentWrite = function(req, res) {  
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
          Appointment.findOneAndUpdate(
          {
            'user_name':user.email},
          {
            $set: { 'app_date': req.body.app_date, 'app_time': req.body.app_time, 'app_location': req.body.app_location},
          },
          {
            new: true
          },
            function(err, appointment) {
                if(err) {
                    res.status(404).json({"message" : "No record found"});
                    return;
                }
                res.status(200).json(appointment);
          })
      });
  }
};

module.exports.supportWrite = function(req, res) {  
 
  
  Appointment.findOneAndUpdate(
    
  {
    'user_name':req.params.id},
  {
    $set: { 'app_date': req.body.app_date, 'app_time': req.body.app_time, 'app_location': req.body.app_location},
  },
  {
    new: true
  },
    function(err, appointment) {
        if(err) {
            res.status(404).json({"message" : "No record found"});
            return;
        }
        res.status(200).json(appointment);
  })
};

module.exports.supportRead = function(req, res) {

  Appointment.findOne({'user_name':req.params.id},
  'user_name app_date app_time app_location',
function(err, appointment) {
  if(err) {
      res.status(404).json({"message" : "No record found"});
      return;
  }
  
  res.status(200).json(appointment);
})

};
