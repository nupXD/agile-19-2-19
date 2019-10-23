const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking.js');
const Packages = require('../models/packages.js');

//get packages route
router.get('/', (req, res) => res.render('booking'));


//view packages route
router.get('/view', (req, res) => {
    Packages.find({})
        .sort({
            createdAt: 1
        })
        .then(
            Packages => {
                // res.statusCode = 200;
                // res.setHeader("Content-Type", "application/json");
                // res.json(Survey);
                res.render('viewPackages', {
                    Packages: Packages,
                    user: req.user
                });

            },
            err => next(err)
        )
        .catch(err => next(err));
});


//get details
// router.get('/for/:id', (req, res, next) => {

//     // res.status(200);
//     // res.setHeader("Content-Type", "application/json");
//     // res.json(req.params.id);
//     Packages.findById(req.params.id)
//         .then(
//             package => {
//                 package_details = package;
//                 res.render('booking', {
//                     package_details: package
//                 });
//             },
//             err => next(err)
//         )
//         .catch(err => next(err));

// });



//add packages routes
router.post('/add', (req, res, next) => {
    const {
        name,
        email,
        ph_no,
        info
    } = req.body;

    let errors = [];

    if (!name || !email || !ph_no || !info) {
        errors.push({
            msg: 'Please enter all fields'
        });
    }
    if (errors.length > 0) {
        res.render('viewPackages', {
            errors,
            name,
            email,
            ph_no,
            info
        });
    } else {
        Booking.create(req.body)
            .then(
                hero => {
                    // res.statusCode = 200;
                    // res.setHeader("Content-Type", "application/json");
                    // res.json(hero);
                    req.flash(
                        'success_msg',
                        'Booking Recorded ! Be patient, we will contatct you soon !'
                    );
                    res.redirect('/booking');
                },
                err => next(err)
            )
            .catch(err => next(err));
    }
});

//end of add packages routes


module.exports = router;