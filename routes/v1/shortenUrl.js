const express = require("express");
const router = express.Router();

router.post("/data/shortenUrl", (req, res) => {
    res.send("Get URL");
})

router.get("/:shortUrl", (req, res) => {
    res.send(req.params.shortUrl);
})

module.exports = router;