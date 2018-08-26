var  mysql = require('mysql');

var pool = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'123',
    database:'users',
    charset:'utf8mb4'
})
module.exports = function(sql,sqlargs,callback){
    pool.getConnection(function(err,connection){
        if(err) throw err;
        connection.query(sql,sqlargs,function(err,rows){
            if(err) throw err;
            callback(rows);
            connection.release();
        })
    })
}