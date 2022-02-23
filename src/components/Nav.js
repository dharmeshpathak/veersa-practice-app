import "./Nav.css";
import { Link } from "react-router-dom";

import { Box } from "@mui/material";
function Nav() {
  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <Box fixed className="nav">
      <div className="logo">
        <img
          src="https://cdn.icon-icons.com/icons2/1526/PNG/512/checklist_106575.png"
          style={{ height: "50px" }}
          alt="todo-logo"
        />
      </div>

      <div className="nav-items">
        <Link to="/veersa-practice-app">Add Notes</Link>

        <Link to="/veersa-practice-app/notes">Notes</Link>
      </div>
    </Box>
  );
}

export default Nav;
