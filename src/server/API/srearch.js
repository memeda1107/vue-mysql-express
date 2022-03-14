let express = require('express');
let router = express.Router();
let Database = require('../mysqlConnection')



// nodeJs接口
router.get('/', function(req, res, next){

  let searchType=req.query.searchType;
  new Database().getHnf(req,res,searchType);
});

module.exports = router;
