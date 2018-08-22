var express = require('express');
var router = express.Router();

/* GET survey page. */
router.get('/', function(req, res, next) {
    // let testObj = app.get('currentSearch');
    console.log("We're in the results");
    console.log(req.body);
    res.render('results', { title: 'Best Friend Finder' });
});

router.post('/', function(req, res, next) {
    
});

module.exports = router;