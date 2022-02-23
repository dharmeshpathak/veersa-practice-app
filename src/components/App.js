// import { Container, Typography } from '@mui/material';
import "./App.css";
import Note from "./Note";
import {useState} from 'react';
import Nav from "./Nav";
function App() {
  const [notes, setNotes] = useState(["here is the first note"]);
  const addNotes = (note)=>{
    const todoElement = note.trim();
    if(todoElement!==""){
    setNotes(prev=>{
      return ([...prev,todoElement])
    })}
  }
  return (
    <div className="home">
    <Nav/>
      <h1>ADD NOTE HERE </h1>

      <Note addNotes={addNotes} />
      <section>
       {notes.map((todo,index)=><p key= {`${index}`}>{todo}</p>)
       }
      </section>
    </div>
  );
}

export default App;
