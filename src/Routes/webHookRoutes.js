// routes/webhookRoutes.js

const express = require("express");
const router = express.Router();
const webhookController = require("../controllers/webHook");
const fs = require("fs");

// Define route for webhook
router.post("/webhook", webhookController.handleIncomingMessage);

// Route tambahan untuk melihat data yang sudah diterima
router.get("/show-data", (req, res) => {
  fs.readFile("receivedData.json", "utf8", (err, data) => {
    if (err) {
      res.status(500).send("Error reading data");
      return;
    }
    res.send(`<pre>${data}</pre>`); // Menampilkan data dalam format JSON di browser
  });
});

module.exports = router;
