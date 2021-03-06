const express = require('express');
const app = express();
const db = require('./db');

function updateCourses(coursefn){
    db.getCourses(function(rows){
        courses = rows;
        coursefn();
    });
}

app.get('/', function(req, res) {
    res.send('<h1>First message from expreess</h1>\n');
    console.log('Request processed');
});

app.listen(7999, function() {
    console.log('Express started');
});

app.get('/getcourses', function(req, res) {
    updateCourses(function(){
        res.send(courses);
    });
});

app.post('/addcourse', function(req, res) {
    courses.push(req.body);
    db.addCourse(req.body, function(){
        updateCourses(function(){
            res.send(courses);
        });
    });
});

courses = [];