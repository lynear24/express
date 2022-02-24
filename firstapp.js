// Name: Nyle Maliwat
// App name: query-demo
// Description: basic express js app
var express = require("Express");

var app = express();

app.get("/", function(request, response) {
    response.send("hello world!");
});

app.listen(3000, function() {
    console.log('Server running at http://localhost:3000');
});