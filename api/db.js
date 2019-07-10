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
}

exports.addCourse = function (course, callback) {
    console.log("Adding course");
    db.query(
        "INSERT INTO Course (title, date, description, info, location) VALUES  ('" + course.title + "', '"+ course.date +"','" + course.description + "','" + course.info + "','" + course.location + "');",
        function (err, rows) {
            // if (err) throw err;
            // console.log("Added course" + course.title + ", "+ course.date +"," + course.description + "," + course.info + "," + course.location);
            // if (err, rows) {
            //     callback(rows);
            // }
        }
    );
};
