var  mysql = require('mysql');

var pool = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'123',
    database:'users'
})
module.exports = function(sql,callback){
    pool.getConnection(function(err,connection){
        if(err) throw err;
        connection.query(sql,function(err,rows){
            if(err) throw err;
            callback(rows);
            connection.release();
        })
    })
}