const mysql = require("mysql2");

const dbKemiling = {
  host: "localhost",
  port: "3306",
  user: "aris",
  password: "Kosasih20!8",
  database: "acc_kemiling",
};

const dbGtsKemiling = {
  host: "localhost",
  port: "3306",
  user: "aris",
  password: "Kosasih20!8",
  database: "aco_gtskemiling",
};

const dbGtsTirtayasa = {
  host: "localhost",
  port: "3306",
  user: "aris",
  password: "Kosasih20!8",
  database: "aco_gtstirtayasa",
};

const dbGading = {
  host: "localhost",
  port: "3306",
  user: "aris",
  password: "Kosasih20!8",
  database: "acc_gading",
};

const dbRajabasa = {
  host: "localhost",
  port: "3306",
  user: "aris",
  password: "Kosasih20!8",
  database: "acc_rajabasa",
};

const dbUrip = {
  host: "localhost",
  port: "3306",
  user: "aris",
  password: "Kosasih20!8",
  database: "acc_urip",
};

const dbTugu = {
  host: "localhost",
  port: "3306",
  user: "aris",
  password: "Kosasih20!8",
  database: "acc_tugu",
};

const dbTirtayasa = {
  host: "localhost",
  port: "3306",
  user: "aris",
  password: "Kosasih20!8",
  database: "acc_tirtayasa",
};

const dbPanjang = {
  host: "localhost",
  port: "3306",
  user: "aris",
  password: "Kosasih20!8",
  database: "acc_panjang",
};

const dbTeluk = {
  host: "localhost",
  port: "3306",
  user: "aris",
  password: "Kosasih20!8",
  database: "acc_teluk",
};

const dbBugis = {
  host: "localhost",
  port: "3306",
  user: "aris",
  password: "Kosasih20!8",
  database: "acc_bugis",
};

const dbPalapa = {
  host: "localhost",
  port: "3306",
  user: "aris",
  password: "Kosasih20!8",
  database: "acc_palapa",
};

const dbMemsys = {
  host: "localhost",
  port: "3306",
  user: "aris",
  password: "Kosasih20!8",
  database: "db_memsys_all",
};
const dbMemsysGtsKemiling = {
  host: "localhost",
  port: "3306",
  user: "aris",
  password: "Kosasih20!8",
  database: "db_memsys_gtskemiling",
};

const dbMemsysGtsTirtayasa = {
  host: "localhost",
  port: "3306",
  user: "aris",
  password: "Kosasih20!8",
  database: "db_memsys_gtstirtayasa",
};

const poolKemiling = mysql.createPool(dbKemiling);
const connectionKemiling = poolKemiling.promise();

const poolGtsKemiling = mysql.createPool(dbGtsKemiling);
const connectionGtsKemiling = poolGtsKemiling.promise();

const poolGtsTirtayasa = mysql.createPool(dbGtsTirtayasa);
const connectionGtsTirtayasa = poolGtsTirtayasa.promise();

const poolGading = mysql.createPool(dbGading);
const connectionGading = poolGading.promise();

const poolRajabasa = mysql.createPool(dbRajabasa);
const connectionRajabasa = poolRajabasa.promise();

const poolUrip = mysql.createPool(dbUrip);
const connectionUrip = poolUrip.promise();

const poolTugu = mysql.createPool(dbTugu);
const connectionTugu = poolTugu.promise();

const poolTirtayasa = mysql.createPool(dbTirtayasa);
const connectionTirtayasa = poolTirtayasa.promise();

const poolPanjang = mysql.createPool(dbPanjang);
const connectionPanjang = poolPanjang.promise();

const poolTeluk = mysql.createPool(dbTeluk);
const connectionTeluk = poolTeluk.promise();

const poolBugis = mysql.createPool(dbBugis);
const connectionBugis = poolBugis.promise();

const poolPalapa = mysql.createPool(dbPalapa);
const connectionPalapa = poolPalapa.promise();

const poolMemsys = mysql.createPool(dbMemsys);
const connectionMemsys = poolMemsys.promise();

const poolMemsysGtsKemiling = mysql.createPool(dbMemsysGtsKemiling);
const connectionMemsysGtsKemiling = poolMemsysGtsKemiling.promise();
const poolMemsysGtsTirtayasa = mysql.createPool(dbMemsysGtsTirtayasa);
const connectionMemsysGtsTirtayasa = poolMemsysGtsTirtayasa.promise();
module.exports = {
  connectionKemiling,
  connectionGtsKemiling,
  connectionGtsTirtayasa,
  connectionGading,
  connectionRajabasa,
  connectionUrip,
  connectionTugu,
  connectionTirtayasa,
  connectionPanjang,
  connectionTeluk,
  connectionBugis,
  connectionPalapa,
  connectionMemsys,
  connectionMemsysGtsKemiling,
  connectionMemsysGtsTirtayasa,
};
