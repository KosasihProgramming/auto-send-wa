const axios = require("axios");

const {
  connectionGtsKemiling,
  connectionMemsysGtsKemiling,
} = require("../config/Database.js");
const { getDataGroup, sendMessageWaGts } = require("../functions/Utils.js");

const port = 5000;
const token = "wFcCXiNy1euYho73dBGwkPhjjTdODzv6";
const namaKlinik = "Klinik Pratama Kosasih Amanah";
// const namaLab = "Laboratorium Kosasih bugis";
const idCabang = [20];

const bulanIndonesia = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];
const yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);

const formattedDate = yesterday.toISOString().split("T")[0];

const getTransaksi = async (req, res) => {
  const queryTransaksiPasien = `
   SELECT sales.salesdate, sales.salestime, customer.id, customer.name FROM sales JOIN customer ON sales.customerid = customer.id WHERE sales.salesdate="${formattedDate}";`;

  const queryMasterPasien = `
    SELECT * FROM pasien_memsys;`;

  try {
    const [transaksiPasien] = await connectionGtsKemiling.query(
      queryTransaksiPasien
    );
    const [dataPasien] = await connectionMemsysGtsKemiling.query(
      queryMasterPasien
    );

    const dataGroup = getDataGroup(dataPasien, transaksiPasien);
    const resultData = {
      data: dataGroup,
    };

    res.json(resultData);
  } catch (error) {
    res.json({
      error: error.message,
    });
  }
};

const sendWa = async (req, res) => {
  try {
    // Import node-fetch secara dinamis
    const fetch = (await import("node-fetch")).default;

    // Fetch data untuk setiap akun
    const response = await fetch(
      `http://202.157.189.177:5000/gts-kemiling/transaksi`
    );
    const dataResponse = await response.json();

    // Fungsi untuk menambahkan jeda waktu (delay)
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const uniqueData = dataResponse.data.filter(
      (value, index, self) =>
        index ===
        self.findIndex(
          (t) => t.nama === value.nama && t.no_telpon === value.no_telpon
        )
    );
    // Cek apakah dataResponse adalah array sebelum menggunakan loop
    if (Array.isArray(uniqueData)) {
      for (const a of uniqueData) {
        console.log(a.nama);
        if (a.no_telpon != "0") {
          sendMessageWaGts("Kemiling", a);
        }
        // Tambahkan jeda 10 menit (600000 milidetik)600000
        await delay(15000); // 600,000 ms = 10 menit
      }
    } else {
      console.log("Data yang diterima bukan array:", dataResponse);
    }

    res.json({
      message: "Data successfully processed for all cabang",
      results: dataResponse,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getTransaksi,
  sendWa,
};
