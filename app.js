const express = require("express");
const cors = require("cors");
const axios = require("axios");
const cron = require("node-cron");
const webhookRoutes = require("./src/Routes/webHookRoutes");
const KemilingRoute = require("./src/Routes/KemilingRoute");
const GtsKemilingRoute = require("./src/Routes/GtsKemilingRoute");
const GtsTirtaRoute = require("./src/Routes/GtsTirtayasaRoute");
const GadingRoute = require("./src/Routes/GadingRoute");
const BugisRoute = require("./src/Routes/BugisRoute");
const RajabasaRoute = require("./src/Routes/RajabasaRoute");
const RunRoute = require("./src/Routes/RunAllRoute");
const UripRoute = require("./src/Routes/UripRoute");
const TuguRoute = require("./src/Routes/TuguRoute");
const TirtayasaRoute = require("./src/Routes/TirtayasaRoute");
const PanjangRoute = require("./src/Routes/PanjangRoute");
const TelukRoute = require("./src/Routes/TelukRoute");
const PalapaRoute = require("./src/Routes/PalapaRoute");
const bodyParser = require("body-parser");
const port = 5000;
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

// Menambahkan handler untuk root path
app.get("/", (req, res) => {
  res.send("Selamat datang di server Express!");
});

// Menggunakan route yang telah diimport
app.use(webhookRoutes);
app.use(KemilingRoute);
app.use(GtsKemilingRoute);
app.use(GtsTirtaRoute);
app.use(GadingRoute);
app.use(BugisRoute);
app.use(RajabasaRoute);
app.use(RunRoute);
app.use(UripRoute);
app.use(TuguRoute);
app.use(TirtayasaRoute);
app.use(PanjangRoute);
app.use(TelukRoute);
app.use(PalapaRoute);

// Menjadwalkan cron job
const schedule = "0 13 * * *"; // At 1 PM every day

cron.schedule(schedule, () => {
  axios
    .get("http://202.157.189.177:5000/run")
    .then((response) => {
      console.log(`Success: ${response.data}`);
    })
    .catch((error) => {
      console.error(`Error: ${error.message}`);
    });
});

app.listen(port, () => {
  console.log(`Server berjalan di port: ${port}`);
});
