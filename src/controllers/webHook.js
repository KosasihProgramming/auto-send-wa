// // controllers/webhookController.js

// exports.handleIncomingMessage = (req, res) => {
//   const incomingData = req.body;

//   console.log("Received webhook data:", incomingData);

//   if (incomingData.type === "incoming_chat") {
//     const chatMessage = incomingData.data.message_body;
//     const senderName = incomingData.data.name;

//     // Proses data sesuai kebutuhan Anda
//     console.log(`Pesan masuk dari ${senderName}: ${chatMessage}`);

//     // Contoh: Mengirim balasan otomatis (opsional)
//     // sendReply(incomingData.data.chat_id, 'Terima kasih atas pesannya!');

//     // Kirim response ke Watzap untuk menandakan bahwa request diterima
//     res.status(200).send("Webhook received");
//   } else {
//     res.status(400).send("Unsupported webhook event");
//   }
// };

const fs = require("fs");

exports.handleIncomingMessage = (req, res) => {
  const incomingData = req.body;

  // Simpan data ke file JSON
  fs.appendFile(
    "receivedData.json",
    JSON.stringify(incomingData, null, 2),
    (err) => {
      if (err) throw err;
      console.log("Data saved to receivedData.json");
    }
  );

  res.status(200).send("Webhook received");
};
