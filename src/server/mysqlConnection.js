let mysql = require('mysql');//调用MySQL模块
let pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '123456',
  port: '3306',
  database: 'testproject'
});
class Database
{
  //js的构造器
  constructor() {};
    //数据库连接池
  //按什么字段查询
     getsearchType(searchType)
    {
      let sql;
      if(searchType==1)
      {
         sql="select * from testlist order by id desc";
      }
      else if(searchType==2)
      {
         sql  ="select * from testlist where concat(componeyName,address)like concat('%',?,'%')  order by id desc "
      }
      else if(searchType==3)
      {
         sql="select * from testlist where projectType = ? order by id desc "
      }
      return sql;
    }
    //查询
  getHnf(req,res,searchType)
    {

      let resultData = {};
      let searchcontent = req.query.searchContant;
      let sql = this.getsearchType(searchType);
        pool.getConnection(function (err, conn) {
          if (err) {
            console.log('   mysql-pool connected fail.');
            console.error('   ' + (err.stack || err));
            conn.release();//释放资源；
          } else {
            // conn.query(sql, "%"+searchcontent+"%",function (qerr, result) {
            conn.query(sql,searchcontent,function (qerr, result) {
              resultData = result;
              conn.release();//释放资源
              res.json({
                status: '1',
                msg: '获取数据成功',
                result: resultData
              });
            });
          }
        });
  }

  //删除表中的数据
  getHnfDelete(req,res){
    let deleteid= Number( req.query.id);
    let sql  ="delete from testlist where id=?"
    pool.getConnection(
      function(err,conn){
        if(err){
          console.log("err");
          console.log("no such item");
          res.send(err)
          conn.release();//释放资源；
        }
        else
        {
          conn.query(sql,deleteid) ;
          conn.release();//释放资源
        }
      }
    )
  }

  getHnfAdd(req,res){
    let sql  ="INSERT INTO testlist (componeyName,address,person,remarks,projectType) VALUES(?,?,?,?,?);";
    pool.getConnection(function (err,conn) {
      if(err){
        console.log("err");
        res.send(err)
        conn.release();//释放资源；
      }
      else {
        conn.query(sql,req);
        conn.release();//释放资源
      }
    })
  }



  //修改列表
  getHnfEdit(req,res){
    let sql  ="UPDATE testlist set componeyName=?,address=?,person=?,remarks=?,projectType=? where id=?"
    pool.getConnection(function (err,conn) {
      if(err){
        console.log("err");
        res.send(err)
        conn.release();//释放资源；
      }
      else {
        conn.query(sql,req);
        conn.release();//释放资源
      }
    })

  }
}
// 把databasse导出
module.exports = Database;
