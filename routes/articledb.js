var db = require('./db');

module.exports.queryArticles = function(callback){
    db('select * from article','',function(rows){
        callback(rows)
    })
}
module.exports.queryInfo = function(option,callback){
    db('select * from article where article_id = ?',[option.article_id],function(rows){
        callback(rows)
    })
}
// module.exports.deleteUser = function(id,callback){
//     db("delete from user where user_id = ?",[id],function(rows){
//         callback(rows)
//     })
// }
module.exports.addArticle = function(option,callback){

    db("insert into article (title,content,author,create_date) values(?,?,?,?)",
    [option.title,option.content,option.author,option.create_date],
    function(rows){
        callback(rows)
    })
    // db("insert into user (user_name,address,phone,salary) values('"+ option.user_name+"','"+option.address+"',"+option.phone+","+option.salary +")",function(rows){
    //     callback(rows)
    // })
}
// module.exports.updateUser = function(option,callback){
//     db("update user set user_name=?,address=?,phone=?,salary=? where user_id=?",
//     [option.user_name,option.address,option.phone,option.salary,option.user_id],
//     function(rows){
//         callback(rows)
//     })
// }