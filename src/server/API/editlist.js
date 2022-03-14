let express = require('express');
let router = express.Router();
let Database = require('../mysqlConnection')
const bodyParser = require('body-parser');
let jsonParser = bodyParser.json()


// nodeJs接口
router.get('/',jsonParser, function(req, res, next){

  let comp=req.query.componeyName;
  let addr='';
  let per=req.query.person;
  let rek=req.query.remarks;
  let type=req.query.projectType;
  let id=req.query.id;
  console.log(req.query)
  req.query.address.forEach(function(value,i){
    let obj=JSON.parse(value)
    addr=addr+'$'+obj.name+';'+obj.website;
  });
  let sqlParams = [
    comp,
    addr,
    per,
    rek,
    type,
    id
  ];

  new Database().getHnfEdit(sqlParams,res);
});

module.exports = router;