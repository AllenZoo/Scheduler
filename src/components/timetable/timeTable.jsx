import React, { Component } from "react";
import "../../css/table.css";
import "../../css/contentbody.css";
import TimeTableHeader from "./timeTableHeader";
import TimeTableBody from "./timeTableBody";
import { useState } from "react";
import { createContext } from "react";
import { useEffect } from "react";
import _ from "lodash";
import TimeTableForm from "./timeTableForm";
import styled from "styled-components";
import TemplateForm from "../../pages/Template/components/templateForm";
import { useContext } from "react";
import { AppContext } from "../../pages/App";

const TimeTableContainer = styled.div`
  position: relative;
  top: 0px;
  bottom: 50px;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-right: 10px;
  z-index: 200;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 1000px;
  margin: 10px auto;
`;

const TTHeaderContainer = styled.div`
  display: flex;
`;

const TTHeaderPaddng = styled.div`
  display: flex;
  max-width: 85px;
  flex: 1;
`;

const TTFormRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  column-gap: 10px;
`;

export const timeContext = createContext(null);
function TimeTable(props) {
  const [interactable, setInteractable] = useState(props.interactable);
  const [schedule, setSchedule] = useState(props.schedule);
  const { addToPlanTemplate } = useContext(AppContext);
  //const { removeFromPlanTemplate } = useContext(AppContext);

  // array of : {date: "mon/tue/wed/thu/fri/sat/sun", time: 8:00AM-11:30PM}
  const selected_slots = [];

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

  function toggleSelectedSlot(slot) {
    //console.log(slot);
    let index = selected_slots.findIndex((selectedSlot) => {
      return selectedSlot.time === slot.time && selectedSlot.date === slot.date;
    });
    //console.log(index);
    if (index === -1) {
      let newSlot = _.cloneDeep(slot);
      selected_slots.push(newSlot);
    } else {
      selected_slots.splice(index, 1);
    }
    //console.log(selected_slots[0]);
  }

  function modifySlots(data) {
    console.log(schedule);
    console.log(props.schedule);
    selected_slots.forEach((slot) => {
      let index = props.schedule.findIndex((day) => {
        return day.date === slot.date;
      });

      let timeSlot = props.schedule[index].plan.get(slot.time);
      console.log(timeSlot);

      // let timeIndex = props.schedule[index].plan.findIndex((time) => {
      //   return time.time === slot.time;
      // });

      props.schedule[index].plan.get(slot.time).name = data.name;
      //schedule[index].plan[timeIndex].desc = data.desc;
      //props.schedule[index].plan[timeIndex].colour = data.colour;
      //rerender();
    });
  }

  function handleSubmit(name, desc, colour) {
    console.log(name, desc, colour);
    let data = { name, desc, colour };
    setSchedule(props.schedule, modifySlots(data));
    //printSelectedSlots();
  }

  function printSelectedSlots() {
    selected_slots.forEach((slot) => {
      console.log(slot);
    });
  }

  useEffect(() => {
    setInteractable(props.interactable);
  }, []);

  // returns interactable timetable (with form)
  if (interactable) {
    return (
      <timeContext.Provider value={{ interactable, toggleSelectedSlot }}>
        <TimeTableContainer>
          <TTHeaderContainer>
            <TTHeaderPaddng />
            <TimeTableHeader data={props.schedule}></TimeTableHeader>
          </TTHeaderContainer>
          <div>
            <TimeTableBody data={props.schedule}></TimeTableBody>
          </div>

          <TTFormRow>
            <TimeTableForm handleSubmit={handleSubmit}></TimeTableForm>
            <TemplateForm
              times={times}
              handleClearTemplate={props.handleClearTemplate}
              addToPlanTemplate={addToPlanTemplate}
            ></TemplateForm>
          </TTFormRow>
        </TimeTableContainer>
      </timeContext.Provider>
    );
  }

  // returns uninteractable timetable (no form)
  return (
    <timeContext.Provider value={{ interactable, toggleSelectedSlot }}>
      <TimeTableContainer>
        <TTHeaderContainer>
          <TTHeaderPaddng />
          <TimeTableHeader data={props.schedule}></TimeTableHeader>
        </TTHeaderContainer>
        <div>
          <TimeTableBody data={props.schedule}></TimeTableBody>
        </div>
      </TimeTableContainer>
    </timeContext.Provider>
  );
}

export default TimeTable;
