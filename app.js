const express = require("express");
const shortenUrl = require("./routes/v1/shortenUrl");
const app = express();

app.use("/api/v1/", shortenUrl);

var server = app.listen(3000, () => {
    console.log("Server is running at " + server.address().port);
})

