const express = require("express");
const mysql = require("mysql");

const app = express();
const PORT = 3001;

const db = mysql.createConnection({
  user: "admin",
  host: "localhost",
  password: "12345678",
  database: "test",
});

app.get("/test", (req, res) => {
  const query = "INSERT INTO testtable (id, number) VALUES (8)";
  db.query(query, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send("Values Inserted");
    }
  });
});

app.get("/", (req, res) => {
  res.send("hello world");
});

app.post("/test", (req, res) => {
  //const value = req.body.value;
  const query = "INSERT INTO testtable (number) VALUES (8)";
  db.query(query);
});

app.listen(PORT, () => {
  console.log("yay, project running on port: " + PORT);
});
