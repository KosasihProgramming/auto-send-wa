const express = require("express");
const app = express();
const port = 5005;

const RunAll = async (req, res) => {
  try {
    const fetch = (await import("node-fetch")).default;
    const urls = [
      `http://202.157.189.177:5005/bugis/send`,
      `http://202.157.189.177:5005/gading/send`,
      `http://202.157.189.177:5005/kemiling/send`,
      `http://202.157.189.177:5005/palapa/send`,
      `http://202.157.189.177:5005/panjang/send`,
      `http://202.157.189.177:5005/rajabasa/send`,
      `http://202.157.189.177:5005/teluk/send`,
      `http://202.157.189.177:5005/tirta/send`,
      `http://202.157.189.177:5005/tugu/send`,
      `http://202.157.189.177:5005/urip/send`,
      `http://202.157.189.177:5005/gts-kemiling/send`,
      `http://202.157.189.177:5005/gts-tirta/send`,
    ];

    // Create an array of fetch promises
    const fetchPromises = urls.map((url) => fetch(url));

    // Wait for all fetch requests to complete
    const responses = await Promise.all(fetchPromises);

    // Convert all responses to JSON
    const dataPromises = responses.map((response) => response.json());
    const dataResponses = await Promise.all(dataPromises);

    // Send the combined data as the response
    res.json({
      message: "Data successfully processed for all routes",
      results: dataResponses,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { RunAll };
