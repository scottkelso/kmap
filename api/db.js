const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'username',
    password: 'password',
    database: 'kmap'
})

exports.getCourses = function(callback){
    db.query(
        "SELECT courseID, title, date, description FROM Course;",
        function(err, rows){
            if(err, rows){
                callback(rows);
            }
        }
    );
}