const http = require=('http');

const server = http.createServer((req, res) => {
    res.end('<h1>All available MAP courses</h1>\n');
    console.log('Request processed.');
});

server.listen(7999, 'localhost', () => {
    console.log('Server started.');
});
