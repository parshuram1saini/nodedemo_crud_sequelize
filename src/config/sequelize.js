const sql = require("mysql2");
// const pool = sql.createConnection({
//   //   host: process.env.DB_HOST,
//   //   user: process.env.DB_USER,
//   //   database: process.env.DB_NAME,
//   //   password: process.env.DB_PASSWORD,
//   host: "localhost",
//   user: "root",
//   database: "coedifyPR",
//   password: "Saini@98765",
// });

//check for connected database----//
// pool.connect((err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("database connected");
//   }
// });
// module.exports = pool.promise();

////using sequelize --------------///
const Sequelize = require("sequelize");

const sequelize = new Sequelize("coedifyPR", "root", "Saini@98765", {
  dialect: "mysql",
  host: "localhost",
});

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log("Connection has been established successfully.");
//   })
//   .catch((err) => {
//     console.error("Unable to connect to the database:", err);
//   });
module.exports = sequelize;
