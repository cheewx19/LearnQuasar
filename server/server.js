var express = require('express');
var app = express();
var port = 5000;
app.use(require("./services/UserService"));
app.listen(port, function () {

    console.log(`Server is running on port: ${port}`);
 })

 module.exports = app

