var App = require('express')()
var ArticleRouter = require('./article')

App.get('/test', function(req, res, next) {
    //console.log(req.query);//获取查询字符串
    // res.setHeader('Access-Control-Allow-Origin','*');
    console.log(req.cookies)
    //设置cookie
    res.cookie('sex','male');
    res.cookie('wife','yanyan',{
        //毫秒为单位
        maxAge:60000,
        httpOnly:true
    })
    res.send('{ "msg":"这是个测试信息" }')
});
App.use('/article',ArticleRouter)
module.exports = App;