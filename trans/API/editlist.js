'use strict';

var express = require('express');
var router = express.Router();
var Database = require('../mysqlConnection');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

// nodeJs接口
router.get('/', jsonParser, function (req, res, next) {

  var comp = req.query.componeyName;
  var addr = '';
  var per = req.query.person;
  var rek = req.query.remarks;
  var type = req.query.projectType;
  var id = req.query.id;
  console.log(req.query);
  req.query.address.forEach(function (value, i) {
    var obj = JSON.parse(value);
    addr = addr + '$' + obj.name + ';' + obj.website;
  });
  var sqlParams = [comp, addr, per, rek, type, id];

  new Database().getHnfEdit(sqlParams, res);
});

module.exports = router;