const express = require("express");
const { result } = require("lodash");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "12345678",
  database: "scheduler",
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

app.post("/save", (req, res) => {
  const user = req.body.user;
  const jsonCommitments = req.body.jsonCommitments;
  const jsonSchedule = req.body.jsonSchedule;
  const jsonTemplate = req.body.jsonTemplate;
  const jsonTasks = req.body.jsonTasks;
  const jsonCTasks = req.body.jsonCTasks;

  console.log(user);
  const query =
    "INSERT INTO schedules (user, commitments, schedule, template, tasks, completed_tasks) VALUES (?, ?, ?, ?, ?, ?)";

  db.query(
    query,
    [user, jsonCommitments, jsonSchedule, jsonTemplate, jsonTasks, jsonCTasks],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.post("/update", (req, res) => {
  const user = req.body.user;
  const query =
    "UPDATE schedules SET commitments = ?, schedule = ?, template = ?, tasks = ?, completed_tasks = ? WHERE user = ?";
});

app.post("/load", (req, res) => {
  const user = req.body.user;

  const query = "SELECT * FROM schedules WHERE user = ?";
  db.query(query, [user], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(PORT, () => {
  console.log("yay, project running on port: " + PORT);
});
