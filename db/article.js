var pool = require('./config')

var getArticle = (sql,callback)=>{
  pool.getConnection(function(err,connect){
    if(err) throw err;
    // var sql = "select * from article";
    connect.query(sql,function(err,results,fileds){
      connect.release();//关闭连接
      if(err) throw err;
      callback(results)
    })
  })
}
var createArticle = (sql,callback)=>{
  pool.getConnection(function(err,connect){
    if(err) throw err;
    // var sql = "select * from article";
    connect.query(sql,function(err,results,fileds){
      connect.release();//关闭连接
      if(err) throw err;
      callback(results)
    })
  })
}
module.exports = {
  createArticle,
  getArticle
}