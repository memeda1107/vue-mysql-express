'use strict';

var express = require('express');
var router = express.Router();
var Database = require('../mysqlConnection');

// nodeJs接口
router.get('/', function (req, res, next) {

  new Database().getHnfDelete(req, res);
});

module.exports = router;