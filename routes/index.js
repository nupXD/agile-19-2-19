const express = require('express');
const router = express.Router();

//modals
const Booking = require('../models/Booking.js');


const {
  ensureAuthenticated,
  forwardAuthenticated
} = require('../config/auth');

// Welcome page route for admins 
// router.get('/', forwardAuthenticated, (req, res) => res.render('welcome'));


// Welcome page route for normal users 
router.get('/', (req, res) => res.render('landing'));


// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res, next) => {

  Booking.find({})
    .sort({
      createdAt: -1
    })
    .then(
      booking => {
        // res.statusCode = 200;
        // res.setHeader("Content-Type", "application/json");
        // res.json(Survey);
        res.render('dashboard', {
          user: req.user,
          booking_info: booking
        });

      },
      err => next(err)
    )
    .catch(err => next(err))

});

module.exports = router;