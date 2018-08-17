var express = require('express');
var router = express.Router();
var query = require('./userdb')

// get users list
router.get('/list', function(req, res, next) {
  //console.log(req.query);//获取查询字符串
  // res.setHeader('Access-Control-Allow-Origin','*');
  query.queryUsers(function(rows){
    res.send(rows);
  })
});

//delete the user
router.get('/delete', function(req, res, next) {
  let name = req.query.name;
  query.deleteUser(name,function(rows){
    res.send(rows);
  })
});
// create user
router.get('/add', function(req, res, next) {
  let name = req.query.name;
  query.addUser(name,function(rows){
    res.send(rows);
  })
});
module.exports = router;
