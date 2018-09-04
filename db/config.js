var mysql = require('mysql');
module.exports = mysql.createPool({
  host     : 'sql.z178.vhostgo.com',
  user     : 'hezbno1',
  password : 'root123',
  database : 'hezbno1'
});