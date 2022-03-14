'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mysql = require('mysql'); //调用MySQL模块
//创建一个connection

var Database = function () {
  //js的构造器
  function Database() {
    _classCallCheck(this, Database);

    this.connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '123456',
      port: '3306',
      database: 'testproject'
    });
    this.connection.connect(function (err) {
      if (err) {
        console.log("连接失败");
      } else {
        console.log("连接成功");
      }
    });
  }
  //按什么字段查询


  _createClass(Database, [{
    key: 'getsearchType',
    value: function getsearchType(searchType) {
      var sql = void 0;
      if (searchType == 1) {
        sql = "select * from testlist";
      } else if (searchType == 2) {
        sql = "select * from testlist where componeyName like?";
      } else if (searchType == 3) {
        sql = "select * from testlist where projectType like? ";
      }
      return sql;
    }
    //查询

  }, {
    key: 'getHnf',
    value: function getHnf(req, res, searchType) {
      var resultData = {};
      var searchcontent = req.query.searchContant;
      var sql = this.getsearchType(searchType);
      this.connection.query(sql, "%" + searchcontent + "%", function (err, result) {
        if (err) {
          console.log(err);
        } else {
          resultData = result;
          res.json({
            status: '1',
            msg: '获取数据成功',
            result: resultData
          });
          // res.send({result:resultData});
          // console.log("查找成功");
          //  console.log(resultData);
        }
      });
    }

    //删除表中的数据

  }, {
    key: 'getHnfDelete',
    value: function getHnfDelete(req, res) {
      var resultData = {};
      var that = this;
      var deleteid = Number(req.query.id);
      var sql = "delete from testlist where id=?";
      this.connection.query(sql, deleteid, function (err, result) {
        if (err) {
          console.log("err");
          console.log("no such item");
          res.send(err);
        } else {
          console.log("删除完成");
          //这时不可再用this.connection，因为此时的this是function函数。
          var _result = that.connection.query("select * from testlist", function (err, result) {
            if (err) {
              console.log('something wrong');
            } else {
              resultData = result;
              res.send({ result: resultData });
            }
          });
        }
      });
    }
  }, {
    key: 'getHnfAdd',
    value: function getHnfAdd(req, res) {

      var sql = "INSERT INTO testlist (componeyName,address,person,remarks,projectType) VALUES(?,?,?,?,?);";
      this.connection.query(sql, req, function (err, result) {
        if (err) {
          res.json({
            ok: false,
            message: '创建失败！'
          });
        } else {
          res.json({
            ok: true,
            id: result.insertId,
            message: '创建成功！'
          });
        }
        res.end();
      });
    }

    //修改列表

  }, {
    key: 'getHnfEdit',
    value: function getHnfEdit(req, res) {
      console.log("修改修改修改");
      console.log(req);
      var resultData = {};
      var that = this;
      // let deleteid= Number( req.query.id);
      // console.log(deleteid);
      var sql = "UPDATE testlist set componeyName=?,address=?,person=?,remarks=?,projectType=? where id=?";
      this.connection.query(sql, req, function (err, result) {
        if (err) {
          console.log(err);
          console.log("no such item");
          res.send(err);
        } else {
          //这时不可再用this.connection，因为此时的this是function函数。
          var _result2 = that.connection.query("select * from testlist", function (err, result) {
            if (err) {
              console.log('something wrong');
            } else {
              resultData = result;
              res.send({ result: resultData });
            }
          });
        }
      });
    }
  }]);

  return Database;
}();
// 把databasse导出


module.exports = Database;