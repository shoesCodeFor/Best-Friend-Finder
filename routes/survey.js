var express = require('express');
var router = express.Router();

/* GET survey page. */
router.get('/', function(req, res, next) {
    res.render('survey', { title: 'Best Friend Finder' });
});

router.post('/', function(req, res, next) {
    let userForm = req.body;
    console.log("The survey route was hit");
    console.log(req.body);
    console.log(userForm);
    // Pass this data along to the matcher function
    // app.set('currentSearch', userForm);
    res.redirect(200, '../results/');
});

module.exports = router;
