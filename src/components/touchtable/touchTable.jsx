import TouchBlock from "./touchBlock";
import { useEffect, useState, useRef } from "react";
import uniqid from "uniqid";
import { useContext } from "react";
import { AppContext } from "../../pages/App";
import TouchTableBody from "./touchTableBody";

function TouchTable() {
  const [selectedBlocks, setSelectedBlocks] = useState([]);
  const [data, setData] = useState([]);
  const { generateEmptyPlan } = useContext(AppContext);

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

  const updateSelectedBlocks = (key) => {
    console.log("updateSelectedBlocks");
  };

  useEffect(() => {
    initData();
  }, []);

  function initData() {
    let newData = [
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
    newData.map((date) => (date.plan = generateEmptyPlan()));
    setData(newData);
  }

  return (
    <div>
      <div>
        <TouchTableBody></TouchTableBody>
      </div>
    </div>
  );
}

export default TouchTable;
