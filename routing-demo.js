// Name: Nyle Maliwat
// App name: query-demo
// Description: routing for multiple http requests
var express = require('express');
var app = express();

app.get('/', (req, res) => {
    res.send("There is GET request for the homepage!");
    res.send("Here is the GET Method!");
});

app.post('/', (req, res) => {
    res.send("A POST request for the homepage is accessed");
    res.send("Here is the POST Method!");
});

app.get('/list_user', (req, res) => {
    res.send("Got a GET request for /list_user");
    res.send("This is Page Listing");
});

app.get('/ab*cd', (req, res) => {
    res.send("There is GET request for /ab*cd");
    res.send("Pattern match page");
});

app.get('/gallery', (req, res) => {
    res.send("There is GET request for the gallery page!");
    res.send("Gallery page");
});

var server = app.listen(3000, 'localhost', function() {
    var host = server.address().address;
    var port = server.address().port;
    
    console.log("Example app listening at http://%s:%s", host, port);
});