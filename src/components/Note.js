import React from "react";
import "./Note.css";
import { useState } from "react";
function Note({addNotes}) {
  const [todo, setTodo] = useState("");
  return (
    <div className="addNote">
      <input
        name="note"
        placeholder="Enter note"
        value={todo}
        className="inputField"
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className="addButton" onClick={()=>addNotes(todo)} >ADD NOTE</button>
    </div>
  );
}

export default Note;
