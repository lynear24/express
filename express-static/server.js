// Name: Nyle Maliwat
// App name: query-demo
// Description: serve static files
var express = require('express');
var app = express();
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send("You have successfully created your second app!");
});

var server = app.listen(3000, 'localhost', function() {
    var host = server.address().address;
    var port = server.address().port;
    
    console.log("Example app listening at http://%s:%s", host, port);
});