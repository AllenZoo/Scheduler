const express = require("express");
const { result } = require("lodash");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

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

app.post("/save", (req, res) => {
  const jsonCommitments = req.body.jsonCommitments;
  const jsonSchedule = req.body.jsonSchedule;
  const jsonTemplate = req.body.jsonTemplate;
  const jsonTasks = req.body.jsonTasks;
  const jsonCTasks = req.body.jsonCTasks;

  const query =
    "INSERT INTO schedules (commitments, schedule, template, tasks, completed_tasks) VALUES (?, ?, ?, ?, ?)";

  db.query(
    query,
    [jsonCommitments, jsonSchedule, jsonTemplate, jsonTasks, jsonCTasks],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.listen(PORT, () => {
  console.log("yay, project running on port: " + PORT);
});
