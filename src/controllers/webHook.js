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

  // Cek apakah file 'receivedData.json' sudah ada
  if (!fs.existsSync("receivedData.json")) {
    // Jika file belum ada, buat file kosong
    fs.writeFileSync("receivedData.json", "[]"); // Menginisialisasi file sebagai array kosong
  }

  // Baca file yang sudah ada
  fs.readFile("receivedData.json", "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      return res.status(500).send("Error reading data");
    }

    // Parse data yang ada dan tambahkan data baru
    const currentData = JSON.parse(data);
    currentData.push(incomingData);

    // Tulis kembali file dengan data baru
    fs.writeFile(
      "receivedData.json",
      JSON.stringify(currentData, null, 2),
      (err) => {
        if (err) {
          console.error("Error writing file:", err);
          return res.status(500).send("Error saving data");
        }
        console.log("Data saved successfully");
        res.status(200).send("Webhook received");
      }
    );
  });
};
