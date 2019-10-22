const express = require('express');
const router = express.Router();
const Stories = require('../models/stories.js');


//get packages route
router.get('/add', (req, res) => res.render('addStories'));


//view user stories route
router.get('/view', (req, res) => {
    Stories.find({})
        .sort({
            createdAt: 1
        })
        .then(
            Stories => {
                res.render('viewStories', {
                    Stories: Stories
                });
            },
            err => next(err)
        )
        .catch(err => next(err));
});


//add packages routes
router.post('/add', (req, res) => {
    const {
        fullname,
        story_description,
        location
    } = req.body;

    let errors = [];

    if (!fullname || !story_description || !location) {
        errors.push({
            msg: 'Please enter all fields'
        });
    }
    if (errors.length > 0) {
        res.render('addStories', {
            errors,
            fullname,
            story_description,
            location,
        });
    } else {
        Stories.create(req.body)
            .then(
                hero => {
                    // res.statusCode = 200;
                    // res.setHeader("Content-Type", "application/json");
                    // res.json(hero);

                    req.flash(
                        'success_msg',
                        'Testimonial Added !'
                    );
                    res.redirect('/stories/add');

                },
                err => next(err)
            )
            .catch(err => next(err));
    }

});

//end of add packages routes

module.exports = router;