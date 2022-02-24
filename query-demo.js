// Name: Nyle Maliwat
// App name: query-demo
// Description:
var express = require("Express");
var app = express();

app.get("/", (req, res) => {
    res.send("hello world!");
    console.log(req.query);
});

app.listen(3000, function() {
    console.log('Server running at http://localhost:3000');
});