var App = require('express')()
var articleDb = require('../db/article')
var util = require('./util')


App.get('/list', function(req, res, next) {
    //console.log(req.query);//获取查询字符串
    // res.setHeader('Access-Control-Allow-Origin','*');
    articleDb.getArticle("select * from article",function(rows){
        //console.log(rows)
        res.send(util.success({
            data:rows
        }));
    })
});


module.exports = App;