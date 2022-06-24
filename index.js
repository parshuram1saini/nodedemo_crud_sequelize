const expressdemo = require("express");
const myEnv = require("./src/config/config");
const students = require("./src/students");
// const sequelize = require("./src/config/sequelize");
const User = require("./src/modal/modal");
const sequelize = require("./src/config/sequelize");
// const { EventEmitter } = require("mysql2/typings/mysql/lib/Connection");
const app = expressdemo();
app.use(expressdemo.json());
app.use(expressdemo.urlencoded());

// console.log(module.children);
// console.log(process.env.DB_PASSWORD);
const port = process.env.PORT || 3000;
// app.listen(port, () => {
//   console.log(
//     `listening on port ${port} and in ${process.env.DB_PASSWORD} and ${process.env.NODE_ENV}`
//   );
// });

// const mydata = [
//   {
//     id: 1,
//     name: "parshuram",
//   },
//   {
//     id: 2,
//     name: "akhil kumar",
//   },
//   {
//     id: 3,
//     name: "rohit sharma",
//   },
//   {
//     id: 4,
//     name: "naveen kumar",
//   },
// ];

// //---------MIDDLEWARE-------
// const middleware = (req, res, next) => {
//   console.log("i am in middleware");
//   next();
// };

// app.get("/", (req, res) => {
//   res.send({ message: "api is loading" });
//   return;
// });
// app.get("/about", middleware, (req, res) => {
//   res.send("i am in about page");
//   return;
// });

// ///---------connection of database ---------//
// app.get("/api/coedify/parshuram", (req, res) => {
//   sequelize.query("select * from emp").then((result, err) => {
//     if (err) {
//       console.log(err);
//     }
//     return res.send(result[0]);
//   });
// });

// // ----get operation--------//
// app.get("/api/students", (req, res) => {
//   // res.json(students);
//   res.send(mydata);
//   return;
// });

// // ----post operation--------//
// app.post("/api/students", (req, res) => {
//   if (!req.body.name) {
//     res.status(400).send({ error: "name is required...." });
//   }
//   const newStudent = req.body.name;
//   const newdata = {
//     id: mydata.length + 1,
//     name: newStudent,
//   };
//   mydata.push(newdata);
//   res.status(200).send(newdata);
// });

// // ----put operation--------//
// app.put("/api/students/:id", (req, res) => {
//   let id = req.params.id;
//   let name = req.body.name;
//   console.log(id);
//   let index;
//   mydata.forEach((student, num) => {
//     if (student.id == id) {
//       index = num;
//     }
//   });
//   console.log(index);
//   if (index >= 0) {
//     let std = mydata[index];
//     std.name = name;
//     res.status(200).send(std);
//   } else {
//     res.status(400).send({ error: "name is not found" });
//   }
//   return;
// });

// // ----DElETE operation--------//
// app.delete("/api/students/:id", (req, res) => {
//   let id = req.params.id;
//   let Index;
//   mydata.forEach((student, index) => {
//     if (student.id == id) {
//       Index = index;
//     }
//   });
//   // console.log(index);
//   // console.log(index);
//   // if (index >= 0) {
//   //   let stud = mydata[id];
//   //   mydata.splice(id, 1);
//   //   res.json(stud);
//   // } else {
//   //   res.status(404).send({ error: "not found" });
//   // }
//   if (Index >= 0) {
//     res.status(200).send(mydata.splice(Index, 1));
//     // mydata.splice(index, 1);
//   } else {
//     res.status(404).send({ error: "not found" });
//   }
// });

//----------------------------------------//

//sync for create the table using sequelize and it is already exists it will not overwrite it.
sequelize.sync().then(() => {
  app.listen(port, console.log(`listening on port ${port}`));
});
