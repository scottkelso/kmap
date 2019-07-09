var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '2Gm5w',
  database: 'mysql'
});

connection.connect(function(err) {
  // if (err) throw err;
  console.log("Connected!");
});

connection.end();
