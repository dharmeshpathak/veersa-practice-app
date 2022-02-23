import React from "react";
import "./Nav.css";
function Nav() {
  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <div className="nav">
      <img
        src="https://cdn.icon-icons.com/icons2/1526/PNG/512/checklist_106575.png"
        style={{ height: "50px" }}
        alt="todo-logo"
      />
      <ul className="nav-items">
        <li>Add Note</li>
        <li>My Notes</li>
      </ul>
    </div>
  );
}

export default Nav;
