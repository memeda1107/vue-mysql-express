'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mysql = require('mysql'); //调用MySQL模块
var pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '123456',
  port: '3306',
  database: 'testproject'
});

var Database = function () {
  //js的构造器
  function Database() {
    _classCallCheck(this, Database);
  }

  _createClass(Database, [{
    key: 'getsearchType',

    //数据库连接池
    //按什么字段查询
    value: function getsearchType(searchType) {
      var sql = void 0;
      if (searchType == 1) {
        sql = "select * from testlist";
      } else if (searchType == 2) {
        sql = "select * from testlist where concat(componeyName,address)like?";
      } else if (searchType == 3) {
        sql = "select * from testlist where projectType like? ";
      }
      return sql;
    }
    //查询

  }, {
    key: 'getHnf',
    value: function getHnf(req, res, searchType) {
      console.log("开始查询");
      var resultData = {};
      var searchcontent = req.query.searchContant;
      var sql = this.getsearchType(searchType);
      pool.getConnection(function (err, conn) {
        if (err) {
          console.log('   mysql-pool connected fail.');
          console.error('   ' + (err.stack || err));
        } else {
          conn.query(sql, "%" + searchcontent + "%", function (qerr, result) {
            resultData = result;
            resultData.reverse();
            conn.release(); //释放资源
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

  }, {
    key: 'getHnfDelete',
    value: function getHnfDelete(req, res) {
      var deleteid = Number(req.query.id);
      var sql = "delete from testlist where id=?";
      pool.getConnection(function (err, conn) {
        if (err) {
          console.log("err");
          console.log("no such item");
          res.send(err);
        } else {
          conn.query(sql, deleteid);
          conn.release(); //释放资源
        }
      });
    }
  }, {
    key: 'getHnfAdd',
    value: function getHnfAdd(req, res) {
      var sql = "INSERT INTO testlist (componeyName,address,person,remarks,projectType) VALUES(?,?,?,?,?);";
      pool.getConnection(function (err, conn) {
        if (err) {
          console.log("err");
          res.send(err);
        } else {
          conn.query(sql, req);
          conn.release(); //释放资源
        }
      });
    }

    //修改列表

  }, {
    key: 'getHnfEdit',
    value: function getHnfEdit(req, res) {
      console.log("修改修改修改");
      console.log(req);
      var sql = "UPDATE testlist set componeyName=?,address=?,person=?,remarks=?,projectType=? where id=?";
      pool.getConnection(function (err, conn) {
        if (err) {
          console.log("err");
          res.send(err);
        } else {
          conn.query(sql, req);
          conn.release(); //释放资源
        }
      });
    }
  }]);

  return Database;
}();
// 把databasse导出


module.exports = Database;