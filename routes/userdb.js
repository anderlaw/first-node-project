var db = require('./db');

module.exports.queryUsers = function(callback){
    db('select * from user',function(rows){
        callback(rows)
    })
}
module.exports.deleteUser = function(name,callback){
    db("delete from user where name = '"+name+"'",function(rows){
        callback(rows)
    })
}
module.exports.addUser = function(name,callback){
    db("insert into user (name) values('"+ name +"')",function(rows){
        callback(rows)
    })
}
module.exports.updateUser = function(name,callback){
    db("'update user set name='"+name+"'",function(rows){
        callback(rows)
    })
}