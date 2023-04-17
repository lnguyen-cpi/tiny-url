const express = require("express");
const shortenUrl = require("./routes/v1/shortenUrl");
const {sequelize} = require("./models");

const app = express();

app.use(express.json());
app.use("/api/v1/", shortenUrl);

// db.sequelize.sync()
//   .then(() => {
//     console.log("Synced db.");
//   })
//   .catch((err) => {
//     console.log("Failed to sync db: " + err.message);
//   }
// );

var server = app.listen(3000, async () => {
    await sequelize.authenticate();
    console.log("Server is running at " + server.address().port);
})

