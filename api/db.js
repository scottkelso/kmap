const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'username',
    password: 'password',
    database: 'kmap'
});

exports.getCourses = function (callback) {
    db.query(
        "SELECT courseID, title, date, description, location FROM Course;",
        function (err, rows) {
            if (err, rows) {
                callback(rows);
            }
        }
    );
};

exports.addCourse = function (course, callback) {
    console.log("Adding course");
    db.query(
        "INSERT INTO Course SET ?", course,
        function (err, rows) {
            console.log("Added course");
            if (err, rows) {
                callback(rows);
            }
        }
    );
};