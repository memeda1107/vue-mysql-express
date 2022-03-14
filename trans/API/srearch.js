'use strict';

var express = require('express');
var router = express.Router();
var Database = require('../mysqlConnection');

// nodeJs接口
router.get('/', function (req, res, next) {

  var searchType = req.query.searchType;
  new Database().getHnf(req, res, searchType);
});

module.exports = router;