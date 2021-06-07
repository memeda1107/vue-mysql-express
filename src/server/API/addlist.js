let express = require('express');
let router = express.Router();
let Database = require('../mysqlConnection')

const bodyParser = require('body-parser');

let jsonParser = bodyParser.json()



// nodeJs接口
router.get('/',jsonParser, function(req, res, next){

  console.log(req.query.address);
  let comp=req.query.componentName;
  // let addr=req.query.address;
  let addr='';
  let per=req.query.person;
  req.query.address.forEach(function(value,i){
    let obj=JSON.parse(value)
    addr=addr+'$'+obj.name+';'+obj.website;
  });
  console.log(addr);
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
