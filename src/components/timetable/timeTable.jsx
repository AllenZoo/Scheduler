import React, { Component } from "react";
import "../../css/table.css";
import "../../css/contentbody.css";
import TimeTableHeader from "./timeTableHeader";
import TimeTableBody from "./timeTableBody";
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import { useEffect } from "react";

export const timeContext = createContext(null);
function TimeTable(props) {
  const [interactable, setInteractable] = useState(props.interactable);

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

  useEffect(() => {
    //console.log("From props Interactable: " + props.interactable);
    setInteractable(props.interactable);
    //console.log("Interactable: " + interactable);
  }, []);

  //const { schedule } = useContext(AppContext);
  console.log(props.schedule);
  return (
    <timeContext.Provider value={{ interactable }}>
      <div id="time-table">
        <div className="time-table-header-container">
          <div className="time-table-header-padding"></div>
          <TimeTableHeader data={props.schedule}></TimeTableHeader>
        </div>
        <div>
          <TimeTableBody data={props.schedule}></TimeTableBody>
        </div>
      </div>
    </timeContext.Provider>
  );
}

export default TimeTable;
