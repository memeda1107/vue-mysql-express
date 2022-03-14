'use strict';

var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var apiAdd = require('./API/addlist');
var apiSearch = require('./API/srearch');
var apiDelete = require('./API/deletelist');
var apiEdit = require('./API/editlist');

app.use('/apiAdd', apiAdd);
app.use('/apiSearch', apiSearch);
app.use('/apiDelete', apiDelete);
app.use('/apiEdit', apiEdit);

//测试
app.use('/test1', function (req, res, next) {
  res.send('hello test1');
});

// app.use(express.static('../dist')); //指定静态资源文件目录
// app.use(express.static('/API')); //指定静态资源文件目录
// 后端api路由
// app.use('/liestApi', liestApi);


var server = require('http').createServer(app);
// 监听端口
// app.listen(9091);
server.listen(9091);
console.log('success listen at port:9091......');