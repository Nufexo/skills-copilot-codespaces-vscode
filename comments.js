//Create web server
var express = require('express');
var app = express();
app.get('/', function(req, res){
    res.send('Hello World');
});
app.listen(8080);
console.log('Server running at http://localhost:8080/');

