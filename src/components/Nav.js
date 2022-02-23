import React from "react";
import "./Nav.css";
import { Link } from 'react-router-dom'
function Nav() {
  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <div className="nav">
      <img
        src="https://cdn.icon-icons.com/icons2/1526/PNG/512/checklist_106575.png"
        style={{ height: "50px" }}
        alt="todo-logo"
      />
      <div className="nav-items">
        
        <Link to="/veersa-practice-app">Add Notes</Link>
        <Link to="/veersa-practice-app/notes">Notes</Link>
      </div>
    </div>
  );
}

export default Nav;
