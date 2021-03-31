let express = require('express');
let router = express.Router();
let Database = require('../mysqlConnection')

// nodeJs接口
router.get('/', function(req, res, next){
  // console.log("select * from testlist")
  // console.log(req)
  new Database().getHnf(req,res);
});

module.exports = router;
