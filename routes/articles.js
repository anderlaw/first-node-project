var express = require('express');
var router = express.Router();
var query = require('./articledb.js')
var success = require('./pack.js').success;


// create user
router.post('/add', function(req, res, next) {
  //console.log(req.query)
  let body = req.body;
  console.log(body)
  query.addArticle(body,function(rows){
    res.send(success({
        message:'发表成功！',
        data:rows
    }));
  })
});
router.get('/list', function(req, res, next) {
  //console.log(req.query)
  query.queryArticles(function(rows){
    res.send(success({
        message:'发表成功！',
        data:rows
    }));
  })
});
router.get('/info', function(req, res, next) {
  //console.log(req.query)
  var option = req.query;
  query.queryInfo(option,function(rows){
    res.send(success({
        message:'查询成功！',
        data:rows
    }));
  })
});

module.exports = router;
