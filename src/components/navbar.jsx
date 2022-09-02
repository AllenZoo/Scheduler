import React, { Component } from "react";
import "../css/header.css";
import "../css/general.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div id="header">
        <ul>
          <CustomLink to="/weeklyoutlook">
            <li className="active-tab">Weekly Outlook</li>
          </CustomLink>
          <CustomLink to="/dayplan">
            <li className="non-active-tab">Day Plan</li>
          </CustomLink>
          <CustomLink to="/checklist">
            <li className="non-active-tab">Checklist</li>
          </CustomLink>
          <CustomLink to="/goals">
            <li className="non-active-tab">Goals</li>
          </CustomLink>
          <CustomLink to="/commitments">
            <li className="non-active-tab">Commitments</li>
          </CustomLink>
          <CustomLink to="/templates">
            <li className="non-active-tab">Templates</li>
          </CustomLink>
        </ul>
      </div>
    );
  }
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default Navbar;

// <ul>
//           <Link to="/weeklyoutlook">
//             <li className="active-tab">Weekly Outlook</li>
//           </Link>
//           <Link to="/dayplan">
//             <li className="non-active-tab">Day Plan</li>
//           </Link>
//           <Link to="/checklist">
//             <li className="non-active-tab">Checklist</li>
//           </Link>
//           <Link to="/goals">
//             <li className="non-active-tab">Goals</li>
//           </Link>
//           <Link to="/commitments">
//             <li className="non-active-tab">Commitments</li>
//           </Link>
//           <Link to="/templates">
//             <li className="non-active-tab">Templates</li>
//           </Link>
//         </ul>
