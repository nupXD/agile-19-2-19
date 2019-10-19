const express = require('express');
const router = express.Router();
const {
  ensureAuthenticated,
  forwardAuthenticated
} = require('../config/auth');

// Welcome page route for admins 
// router.get('/', forwardAuthenticated, (req, res) => res.render('welcome'));


// Welcome page route for normal users 
router.get('/', (req, res) => res.render('landing'));


// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) =>
  res.render('dashboard', {
    user: req.user
  })
);

module.exports = router;