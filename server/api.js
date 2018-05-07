const PasportCongig = require('./config/passport');
const express = require('express');
const router = express.Router();
var jwt = require('express-jwt');
var auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});

const app = express();

const ctrlProfile = require('./controllers/profile');
const ctrlAuth = require('./controllers/authentication');
const ctrlPatient = require('./controllers/patient');
// const ctrlAccounting = require('./controllers/accounting');
const ctrlBilling = require('./controllers/billing');
const ctrlAppointment = require('./controllers/appointment');
const ctrlEmployee = require('./controllers/employee');
const ctrlPay = require('./controllers/pay');
const ctrlSupplies = require('./controllers/supplies')
const ctrlSupport = require('./controllers/support');
const ctrlInventory = require('./controllers/inventory')

/*

*/

// server/api.js
/*
 |--------------------------------------
 | Dependencies
 |--------------------------------------
 */
const User = require('./models/users');
const Patient = require('./models/patients');
const Visit = require('./models/visit');
const Location = require('./models/location');
const Treatment = require('./models/treatment');
const Inventory = require('./models/inventory');
const Supplies = require('./models/supplies');
// const Accounting = require('./models/accounting');
const Billing = require('./models/billing');
const Appointment = require('./models/appointments');
const Employee = require('./models/employees');



 // const jwt = require('express-jwt');
// const jwks = require('jwks-rsa');

/*
 |--------------------------------------
 | Authentication Middleware
 |--------------------------------------
 */

module.exports = function(app, config) {
  
    
/*
 |--------------------------------------
 | API Routes
 |--------------------------------------
 */

   // ZTESTGET
   app.get('/api/users', ctrlSupport.getAll);

   // authentication
   app.post('/api/register', ctrlAuth.register);
   app.post('/api/login', ctrlAuth.login);
   app.put('/api/changePassword', auth, ctrlAuth.changePassword);

   // profile
   app.get('/api/profile', auth, ctrlProfile.profileRead);
   app.put('/api/profile', auth, ctrlProfile.profileWrite);

   // patient
   app.get('/api/patient/profile', auth, ctrlPatient.profileRead);
   app.put('/api/patient/profile', auth, ctrlPatient.profileWrite);

   // Employee
   app.get('/api/employee', auth, ctrlEmployee.employeeRead);
   app.put('/api/employee', auth, ctrlEmployee.employeeWrite);

   // billing
   app.get('/api/billing', auth, ctrlBilling.billingRead);
   // router.put('/billing', auth, ctrlBilling.billingWrite);

   // pay
   app.put('/api/pay', auth, ctrlPay.payBill)

   // appointment
   app.get('/api/appointment', auth, ctrlAppointment.appointmentRead);
   app.put('/api/appointment', auth, ctrlAppointment.appointmentWrite);

   // support
   app.get('/api/support', auth, ctrlSupport.getAll);
   app.get('/api/support/:id', auth, ctrlSupport.getPatient )
   app.put('/api/patient/:id', auth, ctrlPatient.supportWrite)
   app.put('/api/appointment/:id', auth, ctrlAppointment.supportWrite)
   app.put('/api/billing/:id', auth, ctrlBilling.supportWrite)
   app.get('/api/patient/:id', auth, ctrlPatient.supportRead)
   app.get('/api/appointment/:id', auth, ctrlAppointment.supportRead)
   app.get('/api/billing/:id', auth, ctrlBilling.supportRead)

   //supplies
   app.get('/api/supplies', auth, ctrlSupplies.suppliesRead);

   //inventory
   app.get('/api/inventory', auth, ctrlInventory.getAll);
   app.get('/api/inventory/:id', auth, ctrlInventory.getInventory)

   // accounting
   // app.get('/api/accounting', crtlAccounting.getAll);


  // GET API root
  app.get('/api/', (req, res) => {
    res.send('API works');
  });


};