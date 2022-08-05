var express = require('express');
var router = express.Router();
var IndexController = require('../controller/indexController');

router.get('/', IndexController.GetHomePage);

module.exports = router;
