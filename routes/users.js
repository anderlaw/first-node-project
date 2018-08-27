var express = require('express');
var router = express.Router();
var query = require('./userdb')
var success = require('./pack.js').success;

// get users list
router.get('/list', function(req, res, next) {
  //console.log(req.query);//获取查询字符串
  // res.setHeader('Access-Control-Allow-Origin','*');
  query.queryUsers(function(rows){
    //console.log(rows)
    res.send(success({
      data:rows,
      message:'请求成功！'
    }));
  })
});

//delete the user
router.get('/delete', function(req, res, next) {
  let id = req.query.user_id;
  console.log(id)
  query.deleteUser(id,function(rows){
    res.send(rows);
  })
});
// create user
router.get('/add', function(req, res, next) {
  //console.log(req.query)
  let userInfo = req.query;
  query.addUser(userInfo,function(rows){
    res.send(rows);
  })
});
router.get('/update', function(req, res, next) {
  //console.log(req.query)
  let userInfo = req.query;
  console.log(userInfo)
  query.updateUser(userInfo,function(rows){
    res.send(rows);
  })
});
module.exports = router;
