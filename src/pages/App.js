import "../css/App.css";
import Navbar from "../components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WeeklyOutlook from "./WeeklyOutlook/weeklyOutlook";
import DayPlan from "./DayPlan/dayPlan";
import Commitments from "./Commitments/commitments";
import React, { Component, createContext, useEffect, useState } from "react";
import Templates from "./Template/templates";
import _ from "lodash";
import Checklist from "./Checklist/checklist";
import Goals from "./Goals/goals";
import Axios from "axios";
import Data from "./Data/data";
import axios from "axios";

export const AppContext = createContext(null);
function App() {
  // const state = {
  //   user: "",
  //   commitments: [
  // {
  //   id: 1,
  //   key: 1,
  //   name: "CS213",
  //   type: "UBC course",
  //   timeType: "weekly",
  //   hours: "5",
  //   minutes: "30",
  //   colour: "red",
  // },
  // {
  //   id: 2,
  //   key: 2,
  //   name: "CS215",
  //   type: "UBC course",
  //   timeType: "bi-weekly",
  //   hours: "7",
  //   minutes: "30",
  //   colour: "green",
  // },
  //   ],

  //   daily_coms: [],
  //   weekly_coms: [],

  //   schedule: [
  //     {
  //       date: "Monday",
  //       plan: [],
  //     },
  //     {
  //       date: "Tuesday",
  //       plan: [],
  //     },
  //     {
  //       date: "Wednesday",
  //       plan: [],
  //     },
  //     {
  //       date: "Thursday",
  //       plan: [],
  //     },
  //     {
  //       date: "Friday",
  //       plan: [],
  //     },
  //     {
  //       date: "Saturday",
  //       plan: [],
  //     },
  //     {
  //       date: "Sunday",
  //       plan: [],
  //     },
  //   ],

  //   template: [
  // {
  //   date: "Monday",
  //   plan: [],
  // },
  // {
  //   date: "Tuesday",
  //   plan: [],
  // },
  // {
  //   date: "Wednesday",
  //   plan: [],
  // },
  // {
  //   date: "Thursday",
  //   plan: [],
  // },
  // {
  //   date: "Friday",
  //   plan: [],
  // },
  // {
  //   date: "Saturday",
  //   plan: [],
  // },
  // {
  //   date: "Sunday",
  //   plan: [],
  // },
  //   ],

  //   tasks: [{ commitmentName: "cs221", taskDescription: "hi there", id: 2 }],
  //   completedTasks: [],
  // };

  const [user, setUser] = useState("");
  const [commitments, setCommitments] = useState([
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
  ]);
  const [daily_coms, setDaily_coms] = useState([]);
  const [weekly_coms, setWeekly_coms] = useState([]);
  const [schedule, setSchedule] = useState([
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
  ]);
  const [template, setTemplate] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const generateTimesList = () => {
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

  const times = generateTimesList();

  const generateEmptyPlan = () => {
    let map = new Map();
    let slot = { name: "", colour: "pink" };
    times.map((time) => map.set(time, slot));
    return map;
  };

  const generateTestPlan = () => {
    let map = generateEmptyPlan();
    map.set("9:30AM", {
      name: "Appointment DOUBLE LINE",
      colour: "lightgreen",
    });
    map.set("10:00AM", { name: "CS213", colour: "cadetblue" });
    map.set("10:30AM", { name: "CS213", colour: "cadetblue" });
    map.set("11:00AM", { name: "Exercise", colour: "orange" });
    map.set("11:30AM", { name: "Lunch", colour: "yellow" });
    return map;
  };

  const addToPlanTemplate = (plan) => {
    let template = [...template];

    let tsIndex = times.indexOf(plan.timeStart);
    let teIndex = times.indexOf(plan.timeEnd);

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
    let slicedTimes = times.slice(tsIndex, teIndex);

    // Get previous plan and then add new time commitments to it.
    let ePlan = template[planIndex].plan;
    let slot = { name: plan.name, colour: plan.colour };
    slicedTimes.map((time) => ePlan.set(time, slot));

    // Define new plan onto schedule
    template[planIndex].plan = ePlan;

    // Set State
    setTemplate(template);
    //setState({ template });
  };

  const handleClearTemplate = () => {
    let template = [...template];
    template.map((date) => (date.plan = generateEmptyPlan()));
    //setState({ template });
    setTemplate(template);
  };

  const handleDeleteCommitment = (id) => {
    const commitments = commitments.filter((c) => c.id !== id);
    //setState({ commitments });
    setTemplate(template);
  };

  const addCommitment = (commitment) => {
    let commitments = [...commitments];
    let weekly_coms = [...weekly_coms];
    commitments.push(commitment);

    //setState({ commitments });
    setCommitments(commitments);
  };

  const addChecklistTask = (task) => {
    let tasks = [...tasks];
    tasks.push(task);

    // setState({ tasks }, () => {
    //   console.log(tasks);
    //   forceUpdate();
    //   setState(state);
    // });

    setTasks(tasks);
  };

  const toggleTask = (taskId, taskState) => {
    //console.log("the task we toggling has task id: " + taskId);
    let tasks = [...tasks];
    let completedTasks = [...completedTasks];
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

    // setState({ completedTasks }, () => {
    //   console.log(completedTasks);
    // });
    // setState({ tasks });

    setCompletedTasks(completedTasks);
    setTasks(tasks);
  };

  const generateSchedule = () => {
    let inputList = getInputList();
    let schedule = _.cloneDeep(template);
    //let schedule = [...template];
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

      //console.log(plan);
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
    //console.log(template);
    //setState({ schedule });
    setSchedule(schedule);
  };

  const getInputList = () => {
    let inputList = [];
    commitments.forEach(function (commitment) {
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

  const saveData = (user) => {
    const jsonCommitments = JSON.stringify(commitments);
    const jsonTasks = JSON.stringify(tasks);
    const jsonCTasks = JSON.stringify(completedTasks);
    const jsonSchedule = JSON.stringify(schedule, replacer);
    const jsonTemplate = JSON.stringify(template, replacer);

    Axios.post("http://localhost:3001/save", {
      user: user,
      jsonCommitments: jsonCommitments,
      jsonSchedule: jsonSchedule,
      jsonTemplate: jsonTemplate,
      jsonTasks: jsonTasks,
      jsonCTasks: jsonCTasks,
    }).then(() => {
      console.log("success, saved to " + user);
      alert("value successfully saved to: " + user);
    });
  };

  const loadData = (user) => {
    Axios.post("http://localhost:3001/load", {
      user: user,
    }).then((response) => {
      processLoading(response.data);
    });
  };

  const processLoading = (data) => {
    let userData = data[0];
    let commitments = JSON.parse(userData.commitments);
    let tasks = JSON.parse(userData.tasks);
    let completedTasks = JSON.parse(userData.completed_tasks);
    let schedule = JSON.parse(userData.schedule, reviver);
    let template = JSON.parse(userData.template, reviver);

    // setState({ schedule });
    // setState({ template });
    // setState({ commitments });
    // setState({ tasks });
    // setState({ completedTasks });

    setSchedule(schedule);
    setTemplate(template);
    setCommitments(commitments);
    setTasks(tasks);
    setCompletedTasks(completedTasks);
  };

  function replacer(key, value) {
    if (value instanceof Map) {
      return {
        dataType: "Map",
        value: Array.from(value.entries()), // or with spread: value: [...value]
      };
    } else {
      return value;
    }
  }

  function reviver(key, value) {
    if (typeof value === "object" && value !== null) {
      if (value.dataType === "Map") {
        return new Map(value.value);
      }
    }
    return value;
  }

  function getDayPlan() {
    //console.log(new Date().toLocaleString("en-us", { weekday: "long" }));
    let day = new Date().toLocaleString("en-us", { weekday: "long" });
    // schedule: [
    //   {
    //     date: "Monday",
    //     plan: [],
    //   },
    //   {
    //     date: "Tuesday",
    //     plan: [],
    //   },
    let schedule = _.cloneDeep(schedule);
    schedule = schedule.filter((date) => {
      return date.date === day;
    });
    console.log(schedule);
    return schedule;
  }

  // Run once to initialize schedule
  useEffect(() => {
    let newSchedule = [
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
    ];

    console.log(newSchedule);
    newSchedule.map((date) => (date.plan = generateTestPlan()));
    // .then(() => {
    //   setSchedule(newSchedule);
    // });
    //console.log(newSchedule);
    //setState({ schedule });
    setSchedule(schedule);

    let newTemplate = [
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
    ];
    newTemplate.map((date) => (date.plan = generateEmptyPlan()));
    // //setState({ template });
    setTemplate(newTemplate);

    // console.log(new Date().toLocaleString("en-us", { weekday: "long" }));
  }, []);

  // useEffect(() => {
  //   setSchedule(schedule);
  // }, [schedule]);

  function componentDidMount() {
    let schedule = [...schedule];
    schedule.map((date) => (date.plan = generateTestPlan()));
    //setState({ schedule });
    setSchedule(schedule);

    let template = [...template];
    template.map((date) => (date.plan = generateEmptyPlan()));
    //setState({ template });
    setTemplate(template);

    console.log(new Date().toLocaleString("en-us", { weekday: "long" }));
  }

  return (
    <AppContext.Provider
      value={{
        schedule,
        setSchedule,
        template,
        setTemplate,
        commitments,
        setCommitments,
        tasks,
        setTasks,
        completedTasks,
        setCompletedTasks,
      }}
    >
      <div className="App">
        <Router>
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={Home} />
            <Route
              path="/weeklyoutlook"
              element={
                <WeeklyOutlook
                  schedule={schedule}
                  generateSchedule={generateSchedule}
                ></WeeklyOutlook>
              }
            />

            <Route
              path="/dayplan"
              element={<DayPlan schedule={schedule}></DayPlan>}
            />
            <Route
              path="/checklist"
              element={
                <Checklist
                  tasks={tasks}
                  completedTasks={completedTasks}
                  commitments={commitments}
                  addChecklistTask={addChecklistTask}
                  toggleTask={toggleTask}
                ></Checklist>
              }
            ></Route>
            <Route
              path="/goals"
              element={<Goals commitments={commitments}></Goals>}
            ></Route>
            <Route
              path="/commitments"
              element={
                <Commitments
                  commitments={commitments}
                  handleDeleteCommitment={handleDeleteCommitment}
                  addCommitment={addCommitment}
                ></Commitments>
              }
            ></Route>
            <Route
              path="/templates"
              element={
                <Templates
                  template={template}
                  times={times}
                  handleAddToPlan={addToPlanTemplate}
                  handleClearTemplate={handleClearTemplate}
                />
              }
            />
            <Route
              path="/data"
              element={
                <Data
                  user={user}
                  handleSave={saveData}
                  handleLoad={loadData}
                ></Data>
              }
            />
          </Routes>
        </Router>
      </div>
    </AppContext.Provider>
  );
}

export default App;

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);
