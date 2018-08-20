var express = require('express');
var router = express.Router();

/* GET survey page. */
router.get('/', function(req, res, next) {
    res.render('survey', { title: 'Best Friend Finder' });
});

router.post('/', function(req, res, next) {
    res.redirect('/results');
});

module.exports = router;
