var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/boot', function (req, res, next) {
  res.render('boot', { title: 'Bootstrap', name: "Carl Berglund" });
});

module.exports = router;
