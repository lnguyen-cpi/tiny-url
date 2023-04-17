const express = require("express");
const {urls} = require("../../models");
const router = express.Router();

router.post("/data/shortenUrl", async (req, res) => {
    const {longUrl} = req.body;

    try {
        const url = await urls.create({
            shortUrl: (Math.random() + 1).toString(36).substring(7),
            longUrl: longUrl,
        });
        return res.json(url);
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Something went wrong' });
    }
   
})

router.get("/:shortUrl", async (req, res) => {
    const {shortUrl} = req.params;

    try {
        const longUrl = await urls.findOne({
            where: {shortUrl: shortUrl}
        });
        return res.json(longUrl);
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Something went wrong' });
    }
})

module.exports = router;