import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import App from "./pages/App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App></App>);

{
  /* <Router>
<Routes>
  <Route path="/" element={<App></App>} />
  <Route path="/weeklyoutlook" element={<WeeklyOutlook></WeeklyOutlook>} />
  <Route path="/dayplan" element={<DayPlan></DayPlan>} />
  <Route path="/checklist" element=""></Route>
  <Route path="/goals" element=""></Route>
  <Route path="/commitments" element={<Commitments></Commitments>}></Route>
</Routes>
</Router> */
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
