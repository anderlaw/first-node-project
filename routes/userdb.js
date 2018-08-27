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
    console.log(option)
    db("insert into user (user_name,address,phone,salary,register_date) values(?,?,?,?,?)",
    [option.user_name,option.address,option.phone,option.salary,option.register_date],
    function(rows){
        callback(rows)
    })
    // db("insert into user (user_name,address,phone,salary) values('"+ option.user_name+"','"+option.address+"',"+option.phone+","+option.salary +")",function(rows){
    //     callback(rows)
    // })
}
module.exports.updateUser = function(option,callback){
    db("update user set user_name=?,address=?,phone=?,salary=? where user_id=?",
    [option.user_name,option.address,option.phone,option.salary,option.user_id],
    function(rows){
        callback(rows)
    })
}