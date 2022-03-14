let mysql = require('mysql');//调用MySQL模块
//创建一个connection

class Database
{
  //js的构造器
  constructor(){
    this.connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '123456',
      port: '3306',
      database: 'testproject'
    });
    this.connection.connect((err) => {
      if (err) { console.log("连接失败") }
      else { console.log("连接成功") }
    })
  }
  //按什么字段查询
     getsearchType(searchType)
    {
      let sql;
      if(searchType==1)
      {
         sql="select * from testlist";
      }
      else if(searchType==2)
      {
         sql  ="select * from testlist where componeyName like?"
      }
      else if(searchType==3)
      {
         sql="select * from testlist where projectType like? "
      }
      return sql;
    }
    //查询
  getHnf(req,res,searchType){
    let resultData = {};
    let searchcontent= req.query.searchContant;
    let sql=this.getsearchType(searchType);
    this.connection.query(sql,"%"+searchcontent+"%",
      function(err,result){
        if(err){
          console.log(err);
        }
        else
        {
          resultData=result;
          res.json({
            status:'1',
            msg:'获取数据成功',
            result:resultData
          });
        }
      }
    )

  }




  //删除表中的数据
  getHnfDelete(req,res){
    let resultData = {};
    let that = this;
    let deleteid= Number( req.query.id);
    let sql  ="delete from testlist where id=?"
    this.connection.query(sql,deleteid,
      function(err,result){
        if(err){
          console.log("err");
          console.log("no such item");
          res.send(err)
        }
        else
        {
          console.log("删除完成");
          //这时不可再用this.connection，因为此时的this是function函数。
          let result=that.connection.query("select * from testlist",
            function(err,result){
              if(err){
                console.log('something wrong')
              }
              else
              {
                resultData=result;
                res.send({result:resultData});
              }
            }
          )
        }
      }
    )

  }




  getHnfAdd(req,res){


    let sql  ="INSERT INTO testlist (componeyName,address,person,remarks,projectType) VALUES(?,?,?,?,?);";
    this.connection.query(sql,req,
      function (err,result) {
      if(err){
        res.json({
          ok:false,
          message:'创建失败！'
        })
      }else{
        res.json({
          ok:true,
          id:result.insertId,
          message:'创建成功！'
        })
      }
      res.end();
    }
    )

  }



  //修改列表
  getHnfEdit(req,res){
    console.log("修改修改修改")
    console.log(req);
    let resultData = {};
    let that = this;
    // let deleteid= Number( req.query.id);
    // console.log(deleteid);
    let sql  ="UPDATE testlist set componeyName=?,address=?,person=?,remarks=?,projectType=? where id=?"
    this.connection.query(sql,req,
      function(err,result){
        if(err){
          console.log(err);
          console.log("no such item");
          res.send(err)
        }
        else
        {
          //这时不可再用this.connection，因为此时的this是function函数。
          let result=that.connection.query("select * from testlist",
            function(err,result){
              if(err){
                console.log('something wrong')
              }
              else
              {
                resultData=result;
                res.send({result:resultData});
              }
            }
          )
        }
      }
    )

  }





}
// 把databasse导出
module.exports = Database;
