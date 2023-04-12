const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Get URL");
})

router.post("/", (req, res) => {
    res.send("Make URL");
})

module.exports = router;