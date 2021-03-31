let express = require('express');
let router = express.Router();
let Database = require('../mysqlConnection')

// nodeJs接口
router.get('/', function(req, res, next){


  new Database().getHnfDelete(req,res);
});

module.exports = router;
