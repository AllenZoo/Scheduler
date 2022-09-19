import "../css/App.css";
import Navbar from "../components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WeeklyOutlook from "./WeeklyOutlook/weeklyOutlook";
import DayPlan from "./DayPlan/dayPlan";
import Commitments from "./Commitments/commitments";
import React, { Component } from "react";
import Templates from "./Template/templates";
import _ from "lodash";
import Checklist from "./Checklist/checklist";
import Goals from "./Goals/goals";
import Axios from "axios";
import Data from "./Data/data";
import axios from "axios";

class App extends Component {
  state = {
    user: "",
    commitments: [
      {
        id: 1,
        key: 1,
        name: "CS213",
        type: "UBC course",
        timeType: "weekly",
        hours: "5",
        minutes: "30",
        colour: "red",
      },
      {
        id: 2,
        key: 2,
        name: "CS215",
        type: "UBC course",
        timeType: "bi-weekly",
        hours: "7",
        minutes: "30",
        colour: "green",
      },
    ],

    schedule: [
      {
        date: "Monday",
        plan: [],
      },
      {
        date: "Tuesday",
        plan: [],
      },
      {
        date: "Wednesday",
        plan: [],
      },
      {
        date: "Thursday",
        plan: [],
      },
      {
        date: "Friday",
        plan: [],
      },
      {
        date: "Saturday",
        plan: [],
      },
      {
        date: "Sunday",
        plan: [],
      },
    ],

    template: [
      {
        date: "Monday",
        plan: [],
      },
      {
        date: "Tuesday",
        plan: [],
      },
      {
        date: "Wednesday",
        plan: [],
      },
      {
        date: "Thursday",
        plan: [],
      },
      {
        date: "Friday",
        plan: [],
      },
      {
        date: "Saturday",
        plan: [],
      },
      {
        date: "Sunday",
        plan: [],
      },
    ],

    tasks: [{ commitmentName: "cs221", taskDescription: "hi there", id: 2 }],
    completedTasks: [],
  };

  generateTimesList = () => {
    //credit to: Nicholas Tower & Harpreet
    var x = 30; //minutes interval
    var times = []; // time array
    var tt = 60 * 8; // start time
    var ap = ["AM", "PM"]; // AM-PM

    //loop to increment the time and push results in array
    for (var i = 0; tt < 24 * 60; i++) {
      var hh = Math.floor(tt / 60); // getting hours of day in 0-24 format
      var mm = tt % 60; // getting minutes of the hour in 0-55 format
      times[i] =
        ("" + (hh == 12 ? 12 : hh % 12)).slice(-2) +
        ":" +
        ("0" + mm).slice(-2) +
        ap[Math.floor(hh / 12)]; // pushing data in array in [00:00 - 12:00 AM/PM format]
      tt = tt + x;
    }
    return times;
  };
  times = this.generateTimesList();

  generateEmptyPlan = () => {
    let map = new Map();
    let slot = { name: "", colour: "pink" };
    this.times.map((time) => map.set(time, slot));
    return map;
  };

  generateTestPlan = () => {
    let map = this.generateEmptyPlan();
    map.set("9:30AM", { name: "Appointment", colour: "lightgreen" });
    map.set("10:00AM", { name: "CS213", colour: "cadetblue" });
    map.set("10:30AM", { name: "CS213", colour: "cadetblue" });
    map.set("11:00AM", { name: "Exercise", colour: "orange" });
    map.set("11:30AM", { name: "Lunch", colour: "yellow" });
    return map;
  };

  addToPlanTemplate = (plan) => {
    let template = [...this.state.template];

    let tsIndex = this.times.indexOf(plan.timeStart);
    let teIndex = this.times.indexOf(plan.timeEnd);

    // Get index of schedule to change plan
    let index = 0;
    let planIndex = -1;
    template.forEach(function (dateColumn) {
      if (dateColumn.date === plan.day) {
        //console.log("found index!");
        planIndex = index;
      } else {
        //console.log("trying to find index!");
        index++;
      }
    });

    // Array of times that we want to fill the map plan with the name.
    let slicedTimes = this.times.slice(tsIndex, teIndex);

    // Get previous plan and then add new time commitments to it.
    let ePlan = template[planIndex].plan;
    let slot = { name: plan.name, colour: plan.colour };
    slicedTimes.map((time) => ePlan.set(time, slot));

    // Define new plan onto schedule
    template[planIndex].plan = ePlan;

    // Set State
    this.setState({ template });
  };

  handleClearTemplate = () => {
    let template = [...this.state.template];
    template.map((date) => (date.plan = this.generateEmptyPlan()));
    this.setState({ template });
  };

  handleDeleteCommitment = (id) => {
    const commitments = this.state.commitments.filter((c) => c.id !== id);
    this.setState({ commitments });
  };

  addCommitment = (commitment) => {
    let commitments = [...this.state.commitments];
    commitments.push(commitment);
    this.setState({ commitments });
  };

  addChecklistTask = (task) => {
    let tasks = [...this.state.tasks];
    tasks.push(task);

    this.setState({ tasks }, () => {
      console.log(this.state.tasks);
      this.forceUpdate();
      this.setState(this.state);
    });
  };

  toggleTask = (taskId, taskState) => {
    //console.log("the task we toggling has task id: " + taskId);
    let tasks = [...this.state.tasks];
    let completedTasks = [...this.state.completedTasks];
    if (taskState) {
      // checkbox was just toggled on - remove task from tasks and add to completed tasks
      let task = tasks.find((task) => {
        return task.id === taskId;
      });
      tasks = tasks.filter((task) => {
        return task.id !== taskId;
      });
      completedTasks.push(task);
    } else {
      // checkbox was just toggled off - remove task from completed tasks and add to tasks
      let task = completedTasks.find((task) => {
        return task.id === taskId;
      });
      completedTasks = completedTasks.filter((task) => {
        return task.id !== taskId;
      });
      tasks.push(task);
    }

    this.setState({ completedTasks }, () => {
      console.log(this.state.completedTasks);
    });
    this.setState({ tasks });
  };

  generateSchedule = () => {
    let inputList = this.getInputList();
    let schedule = _.cloneDeep(this.state.template);
    //let schedule = [...this.state.template];
    //console.log(schedule);
    schedule.forEach(function (dateColumn) {
      fillPlan(dateColumn.plan, inputList);
    });

    function fillPlan(plan, inputList) {
      // block[0] is key, block[1] is value

      // let block = getNextEmptyBlock(plan);
      // let popped = inputList.pop();
      // plan.set(block[0], popped);

      let eBlocks = getEmptyTimeBlocks(plan);
      //console.log(eBlocks[0]);

      eBlocks.forEach(function (block) {
        let popped = inputList.pop();

        if (popped) {
          plan.set(block[0], popped);
        } else {
          plan.set(block[0], "");
        }
      });

      console.log(plan);
    }

    function getEmptyTimeBlocks(plan) {
      let eBlocks = [];
      Array.from(plan).forEach(function (block) {
        if (block[1] === "") {
          eBlocks.push(block);
        }
      });
      return eBlocks;
    }

    function getNextEmptyBlock(plan) {
      let eBlock = false;
      // some.() breaks loop once returns true.
      Array.from(plan).some(function (block) {
        // block[0] is key, block[1] is value
        if (block[1] === "") {
          eBlock = block;
          return true;
        } else {
          return false;
        }
      });
      //console.log(eBlock);
      return eBlock;
    }

    //console.log(schedule);
    //console.log(this.state.template);
    this.setState({ schedule });
  };

  getInputList = () => {
    let inputList = [];
    this.state.commitments.forEach(function (commitment) {
      let blocks = commitment.hours * 2 + commitment.minutes / 30;

      switch (commitment.timeType) {
        case "daily":
          blocks = blocks * 7;
          break;
        case "weekly":
          blocks = blocks;
          break;
        case "bi-weekly":
          blocks = Math.ceil(blocks / 2);
          break;
      }

      for (let i = 0; i < blocks; i++) {
        inputList.push(commitment.name);
      }
    });

    // shuffle function
    const shuffle = (array) => {
      let currentIndex = array.length,
        randomIndex;

      // While there remain elements to shuffle.
      while (currentIndex != 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex],
          array[currentIndex],
        ];
      }
    };

    // shuffle blocks to input
    shuffle(inputList);
    return inputList;
  };

  saveData = (user) => {
    const jsonCommitments = JSON.stringify(this.state.commitments);
    const jsonSchedule = JSON.stringify(this.state.schedule);
    const jsonTemplate = JSON.stringify(this.state.template);
    const jsonTasks = JSON.stringify(this.state.tasks);
    const jsonCTasks = JSON.stringify(this.state.completedTasks);

    Axios.post("http://localhost:3001/save", {
      user: user,
      jsonCommitments: jsonCommitments,
      jsonSchedule: jsonSchedule,
      jsonTemplate: jsonTemplate,
      jsonTasks: jsonTasks,
      jsonCTasks: jsonCTasks,
    }).then(() => {
      console.log("success, saved to " + user);
    });
  };

  loadData = () => {};

  componentDidMount() {
    let schedule = [...this.state.schedule];
    schedule.map((date) => (date.plan = this.generateTestPlan()));
    this.setState({ schedule });

    let template = [...this.state.template];
    template.map((date) => (date.plan = this.generateEmptyPlan()));
    this.setState({ template });
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={Home} />
            <Route
              path="/weeklyoutlook"
              element={
                <WeeklyOutlook
                  schedule={this.state.schedule}
                  generateSchedule={this.generateSchedule}
                ></WeeklyOutlook>
              }
            />
            <Route path="/dayplan" element={<DayPlan></DayPlan>} />
            <Route
              path="/checklist"
              element={
                <Checklist
                  tasks={this.state.tasks}
                  completedTasks={this.state.completedTasks}
                  commitments={this.state.commitments}
                  addChecklistTask={this.addChecklistTask}
                  toggleTask={this.toggleTask}
                ></Checklist>
              }
            ></Route>
            <Route
              path="/goals"
              element={<Goals commitments={this.state.commitments}></Goals>}
            ></Route>
            <Route
              path="/commitments"
              element={
                <Commitments
                  commitments={this.state.commitments}
                  handleDeleteCommitment={this.handleDeleteCommitment}
                  addCommitment={this.addCommitment}
                ></Commitments>
              }
            ></Route>
            <Route
              path="/templates"
              element={
                <Templates
                  template={this.state.template}
                  times={this.times}
                  handleAddToPlan={this.addToPlanTemplate}
                  handleClearTemplate={this.handleClearTemplate}
                />
              }
            />
            <Route
              path="/data"
              element={
                <Data
                  user={this.state.user}
                  handleSave={this.saveData}
                  handleLoad={this.loadData}
                ></Data>
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);
