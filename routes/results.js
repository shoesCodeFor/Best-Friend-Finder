const express = require('express');
const router = express.Router();
const Animals = require('../models/breeds.js');

var breeds = new Animals();

/* GET survey page. */
router.get('/:id', function(req, res, next) {
    // let testObj = app.get('currentSearch');
    console.log("We're in the results");
    console.log(breeds.dogs[req.params.id]);
    res.render('results', 
        { title: 'Best Friend Finder' ,
          dog: breeds.dogs[req.params.id]
        });
});

router.post('/', function(req, res, next) {
    
});

module.exports = router;