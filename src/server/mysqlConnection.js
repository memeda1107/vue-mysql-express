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


  getHnf(req,res){
    let resultData = {};
    let searchcontent= req.query.searchContant;
    //模糊查询
    let searchsql  ="select * from testlist where componeyName like?"
    //获取全部数据
    let getall="select * from testlist";
    let sql;
    if(searchcontent=="")
    {
      sql=getall;
    }
    else
      {
        sql=searchsql;
    }

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
          // res.send({result:resultData});
          // console.log("查找成功");
          console.log(resultData);
        }
      }
    )
  }




  //删除表中的数据
  getHnfDelete(req,res){
    let resultData = {};
    let that = this;
    let deleteid= Number( req.query.id);
    console.log(typeof id)
    let sql  ="delete from testlist where id=?"
    console.log("正在删除id:"+typeof deleteid);
    this.connection.query(sql,deleteid,
    // this.connection.query("delete from testlist where id=@deleteid",
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
    let sql  ="INSERT INTO testlist (componeyName,address,person) VALUES(?,?,?);";
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



}
// 把databasse导出
module.exports = Database;
