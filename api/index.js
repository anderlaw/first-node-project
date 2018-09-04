var App = require('express')()
var ArticleRouter = require('./article')


App.use('/article',ArticleRouter)
module.exports = App;