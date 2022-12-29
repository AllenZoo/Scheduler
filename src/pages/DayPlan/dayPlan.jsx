import React, { Component } from "react";
import _ from "lodash";
import TimeTable from "../../components/timetable/timeTable";
import "../../css/dayPlan.css";

function DayPlan(props) {
  function getDayPlan() {
    let day = new Date().toLocaleString("en-us", { weekday: "long" });
    if (props.schedule != null) {
      let schedule = _.cloneDeep(props.schedule);
      schedule = schedule.filter((date) => {
        return date.date === day;
      });

      return schedule;
    }
  }

  const dayPlan = getDayPlan();

  return (
    <div>
      <div className="day-plan-container">
        <div className="page-title">Day Plan</div>
        <TimeTable schedule={dayPlan}></TimeTable>
      </div>

      <div className="dayplan-page-background"></div>
    </div>
  );
}

export default DayPlan;
