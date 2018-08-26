var db = require('./db');

module.exports.queryUsers = function(callback){
    db('select * from user','',function(rows){
        callback(rows)
    })
}
module.exports.deleteUser = function(id,callback){
    db("delete from user where user_id = ?",[id],function(rows){
        callback(rows)
    })
}
module.exports.addUser = function(option,callback){

    db("insert into user (user_name,address,phone,salary) values(?,?,?,?)",
    [option.user_name,option.address,option.phone,option.salary],
    function(rows){
        callback(rows)
    })
    // db("insert into user (user_name,address,phone,salary) values('"+ option.user_name+"','"+option.address+"',"+option.phone+","+option.salary +")",function(rows){
    //     callback(rows)
    // })
}
module.exports.updateUser = function(name,callback){
    db("'update user set name='"+name+"'",function(rows){
        callback(rows)
    })
}