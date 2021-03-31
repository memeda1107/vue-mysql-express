let express = require('express');
let router = express.Router();
let Database = require('../mysqlConnection')

const bodyParser = require('body-parser');

let jsonParser = bodyParser.json()



// nodeJs接口
router.get('/',jsonParser, function(req, res, next){

  console.log(req.query.componentName);
  let comp=req.query.componentName;
  let addr=req.query.address;
  let per=req.query.person;

  let sqlParams = [

    comp,
    addr,
    per
  ];

  console.log("insert information .......")
  console.log(req.query.componentName)
  new Database().getHnfAdd(sqlParams,res);
});

module.exports = router;
