var express = require("express");
recordRoutes = express.Router();
var database = require("../firestore");

recordRoutes.get("/api/getUser", async function(req, res) {
    await database.getUser();
    var user = database.user;
    console.log(user)
    res.json(user);
})

module.exports = recordRoutes