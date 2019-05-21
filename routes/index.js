var express = require('express');
var router = express.Router();
var array = require('../data/title')

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log(array)
  res.render('index', {array});
});


module.exports = router;