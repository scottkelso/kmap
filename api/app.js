const express = require('express')
const app = express()
const db = require('./db')
const bodyParser = require('body-parser')

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: false })); // support encoded bodies


var jsonParser = bodyParser.json();

function updateCourses(coursefn){
    db.getCourses(function(rows){
        courses = rows;
        coursefn();
    });
};

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

app.post('/createCourse', function(req,res){
    console.log('db works '+ JSON.stringify(req.body));
    // db.addCourse(req.param);
    res.sendStatus(200);
    res.end;
});

courses = [];