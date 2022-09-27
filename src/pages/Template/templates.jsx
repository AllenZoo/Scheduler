import React, { Component } from "react";
import TimeTable from "../../components/timetable/timeTable";
import "../../css/template.css";
import TemplateForm from "./components/templateForm";

class Templates extends Component {
  times = this.props.times;
  constructor(props) {
    super(props);
    this.dayRef = React.createRef();
    this.timeStartRef = React.createRef();
    this.timeEndRef = React.createRef();
    this.nameRef = React.createRef();
  }

  addToPlanTemplate = (plan) => {
    this.props.handleAddToPlan(plan);
  };

  render() {
    return (
      <div>
        <div className="template-container">
          <div className="page-title">Template</div>
          <TimeTable schedule={this.props.template}></TimeTable>
          <TemplateForm
            times={this.times}
            handleClearTemplate={this.props.handleClearTemplate}
            addToPlanTemplate={this.addToPlanTemplate}
          ></TemplateForm>
        </div>
        <div id="content-body"></div>
      </div>
    );
  }
}

export default Templates;
