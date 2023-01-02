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
import TestArea from "./Test/testArea";

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
  const [commitments, setCommitments] = useState([]);

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

    times.map((time) => {
      let newSlot = _.cloneDeep(slot);
      map.set(time, newSlot);
    });
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
    let newTemplate = [...template];

    let tsIndex = times.indexOf(plan.timeStart);
    let teIndex = times.indexOf(plan.timeEnd);

    // Get index of schedule to change plan
    let index = 0;
    let planIndex = -1;
    newTemplate.forEach(function (dateColumn) {
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
    let ePlan = newTemplate[planIndex].plan;
    let slot = { name: plan.name, colour: plan.colour };
    slicedTimes.map((time) => ePlan.set(time, slot));

    // Define new plan onto schedule
    newTemplate[planIndex].plan = ePlan;

    // Set State
    setTemplate(newTemplate);
    //setState({ template });
  };
  const handleClearTemplate = () => {
    console.log("clearing template");
    let newTemplate = [...template];
    newTemplate.map((date) => (date.plan = generateEmptyPlan()));
    setTemplate(newTemplate);
  };

  const handleDeleteCommitment = (id) => {
    const newCommitments = commitments.filter((c) => c.id !== id);
    console.log("deleted commitment");
    //setState({ commitments });
    setCommitments(newCommitments);
  };
  const addCommitment = (commitment) => {
    let newCommitments = [...commitments];
    newCommitments.push(commitment);

    if (commitment.timeType.toLowerCase() == "daily") {
      console.log("daily");
      let newDaily_coms = [...daily_coms];
      newDaily_coms.push(commitment);
      setDaily_coms(newDaily_coms);
    } else if (commitment.timeType.toLowerCase() == "weekly") {
      console.log("weekly");
      let newWeekly_coms = [...weekly_coms];
      newWeekly_coms.push(commitment);
      setWeekly_coms(newWeekly_coms);
    }

    console.log("added commitment");

    setCommitments(newCommitments);
  };
  const reassignCommitments = () => {
    let newDaily_coms = [...daily_coms];
    let newWeekly_coms = [...weekly_coms];

    let newCommitments = [...commitments];
    newCommitments.map((com) => {
      if (com.timeType.toLowerCase() == "daily") {
        newDaily_coms.push(com);
      } else if (com.timeType.toLowerCase() == "weekly") {
        newWeekly_coms.push(com);
      }
    });

    setDaily_coms(newDaily_coms);
    setWeekly_coms(newWeekly_coms);
  };
  const clearCommitments = () => {
    setDaily_coms([]);
    setWeekly_coms([]);
    setCommitments([]);
  };

  const addChecklistTask = (task) => {
    let newTasks = [...tasks];
    newTasks.push(task);

    // setState({ tasks }, () => {
    //   console.log(tasks);
    //   forceUpdate();
    //   setState(state);
    // });

    setTasks(newTasks);
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

  // MAIN FUNCTION
  const generateSchedule = () => {
    //let inputList = getInputList();
    let newSchedule = _.cloneDeep(template);
    console.log(commitments);
    newSchedule.forEach(function (dateColumn) {
      let dailyList = getDailyInputList();
      let weeklyList = getWeeklyInputList();
      // fill daily
      fillPlan(dateColumn.plan, dailyList);
      fillPlan(dateColumn.plan, weeklyList);
    });

    function fillPlan(plan, dailyList) {
      //console.log(dailyList);
      let eBlocks = getEmptyTimeBlocks(plan);
      let list = [...dailyList];
      //console.log(list);

      eBlocks.forEach(function (block) {
        let popped = list.pop();
        if (popped) {
          //console.log("setting block to something!");
          plan.set(block[0], popped);
        } else {
          //console.log("setting block to nothing!");
          let eSlot = { name: "", colour: "pink" };
          plan.set(block[0], eSlot);
        }
      });
    }

    function getEmptyTimeBlocks(plan) {
      let eBlocks = [];
      Array.from(plan).forEach(function (block) {
        //console.log(block[1]);
        if (block[1].name == "") {
          //console.log("adding block");
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

    setSchedule(newSchedule);
  };

  const getDailyInputList = () => {
    //console.log("getting daily input list");
    //console.log(daily_coms);
    let inputList = [];
    daily_coms.forEach(function (commitment) {
      let blocks = commitment.hours * 2 + commitment.minutes / 30;

      for (let i = 0; i < blocks; i++) {
        inputList.push(commitment);
      }
    });

    // shuffle blocks to input
    shuffle(inputList);
    console.log(inputList);
    return inputList;
  };

  const getWeeklyInputList = () => {
    let inputList = [];
    weekly_coms.forEach(function (commitment) {
      let blocks = commitment.hours * 2 + commitment.minutes / 30;

      for (let i = 0; i < blocks; i++) {
        inputList.push(commitment);
      }
    });
    console.log(inputList);
    // shuffle blocks to input
    shuffle(inputList);
    return inputList;
  };

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

  const saveDataDB = (user) => {
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

  const loadDataDB = (user) => {
    Axios.post("http://localhost:3001/load", {
      user: user,
    }).then((response) => {
      processLoading(response.data);
    });
  };

  const saveDataLocal = (user) => {
    console.log("saving to local storage");
    const jsonCommitments = JSON.stringify(commitments);
    const jsonTasks = JSON.stringify(tasks);
    const jsonCTasks = JSON.stringify(completedTasks);
    const jsonSchedule = JSON.stringify(schedule, replacer);
    const jsonTemplate = JSON.stringify(template, replacer);

    localStorage.setItem("commitments", jsonCommitments);
    localStorage.setItem("tasks", jsonTasks);
    localStorage.setItem("completed_tasks", jsonCTasks);
    localStorage.setItem("schedule", jsonSchedule);
    localStorage.setItem("template", jsonTemplate);
  };

  const loadDataLocal = (user) => {
    console.log("loading from local storage");
    setCommitments(JSON.parse(localStorage.getItem("commitments")));
    setTasks(JSON.parse(localStorage.getItem("tasks")));
    setCompletedTasks(JSON.parse(localStorage.getItem("completed_tasks")));
    setSchedule(JSON.parse(localStorage.getItem("schedule"), reviver));
    setTemplate(JSON.parse(localStorage.getItem("template"), reviver));
  };

  const processLoading = (data) => {
    let userData = data[0];
    let commitments = JSON.parse(userData.commitments);
    let tasks = JSON.parse(userData.tasks);
    let completedTasks = JSON.parse(userData.completed_tasks);
    let schedule = JSON.parse(userData.schedule, reviver);
    let template = JSON.parse(userData.template, reviver);

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

  function initStates() {
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
    setSchedule(newSchedule);
    //console.log(newSchedule);

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

    let newCommitments = [];
    setCommitments(newCommitments);
    let com1 = {
      id: 1,
      key: 1,
      name: "CS213",
      type: "UBC course",
      timeType: "weekly",
      hours: "5",
      minutes: "30",
      colour: "red",
    };
    let com2 = {
      id: 2,
      key: 2,
      name: "CS215",
      type: "UBC course",
      timeType: "bi-weekly",
      hours: "7",
      minutes: "30",
      colour: "green",
    };

    addCommitment(com1);
    addCommitment(com2);
  }
  // Run once to initialize schedule
  useEffect(() => {
    initStates();
  }, []);

  useEffect(() => {
    reassignCommitments();
  }, [commitments]);

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
        generateEmptyPlan,
        addToPlanTemplate,
        clearCommitments,
        handleClearTemplate,
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
                  handleSaveDB={saveDataDB}
                  handleLoadDB={loadDataDB}
                  handleSaveLocal={saveDataLocal}
                  handleLoadLocal={loadDataLocal}
                ></Data>
              }
            />
            <Route path="/test" element={<TestArea />} />
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
