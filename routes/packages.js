const express = require('express');
const router = express.Router();

const Packages = require('../models/packages.js');


//get packages route
router.get('/add', (req, res) => res.render('addPackages'));

//add packages routes
router.post('/add', (req, res) => {
    const {
        title,
        description,
        total_price,
        extra_price_details,
        ps_detail,
        transportation_details
    } = req.body;

    let errors = [];

    if (!title || !description || !total_price || !extra_price_details || !ps_detail || !transportation_details) {
        errors.push({
            msg: 'Please enter all fields'
        });
    }
    if (errors.length > 0) {
        res.render('addPackages', {
            errors,
            title,
            description,
            total_price,
            extra_price_details,
            ps_detail,
            transportation_details
        });
    } else {
        Packages.create(req.body)
            .then(
                hero => {
                    res.statusCode = 200;
                    res.setHeader("Content-Type", "application/json");
                    res.json(hero);
                },
                err => next(err)
            )
            .catch(err => next(err));
    }
});

//end of add packages routes


//edit packages route
// router.get('/edit{id}', (requ, respo) => {



// });

module.exports = router;