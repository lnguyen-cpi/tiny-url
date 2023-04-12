const express = require("express");
const urls = require("./routes/url");
const app = express();

app.use("/urls", urls);

var server = app.listen(3000, () => {
    console.log("Server is running at " + server.port);
})

