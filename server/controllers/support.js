
var mongoose = require('mongoose');
const userModel = require('../models/users');
var User = mongoose.model('User');
const patientModel = require('../models/patients');
var Patient = mongoose.model('Patient');
const appointmentModel = require('../models/appointments');
var Appointment = mongoose.model('Appointment');
const billingModel = require('../models/billing');
var Billing = mongoose.model('Billing');
const employeeModel = require('../models/employees');
var Employee = mongoose.model('Employee');

module.exports.getAll = function(req, res) {
  const _patientProjection = "user_name first_name last_name phone_number state zip_code"
 
    
    Patient
      .find({}, _patientProjection, (err, patient) => {
        let patientArr = [];
        if (err) {
          return res.status(500).send({message: err.message});
        }
        if (patient) {
          patient.forEach(patient => {
            patientArr.push(patient);
          });
        }
        console.log()
        res.send(patientArr);
      });
  
  
};

module.exports.getPatient = function(req, res) {

  Patient.findOne({'user_name':req.params.id},
  'id_number first_name last_name phone_number street city state zip_code email_address visit_history user_name',
    function(err, patient) {
          if(err) {
              res.status(404).json({"message" : "No record found"});
              return;
          }
          res.status(200).json(patient);
    })
}