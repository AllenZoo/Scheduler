import React, { Component } from "react";
import "../css/header.css";
import "../css/general.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function Navbar() {
  return (
    <div id="header">
      <ul>
        <CustomLink to="/weeklyoutlook">Weekly Outlook</CustomLink>
        <CustomLink to="/dayplan">Day Plan</CustomLink>
        <CustomLink to="/checklist">Checklist</CustomLink>
        <CustomLink to="/goals">Goals</CustomLink>
        <CustomLink to="/commitments">Commitments</CustomLink>
        <CustomLink to="/templates">Templates</CustomLink>
        <CustomLink to="/data">Data</CustomLink>
      </ul>
    </div>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active-tab" : "non-active-tab"}>
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
