// import { Container, Typography } from '@mui/material';
import "./App.css";
import Note from "./Note";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import {useState} from 'react';
import Nav from "./Nav";
import Notes from "./Notes";
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
    <BrowserRouter>
    <div className="home">
    
    <Nav/>
     

      
      <section>
      
    <Routes>
      
      <Route path="/veersa-practice-app" element={<Note addNotes={addNotes}/>} />
      <Route path="/veersa-practice-app/notes" element={<Notes notes={notes} />} />
    </Routes>
  
      </section>
    </div>
    </BrowserRouter>
  );
}

export default App;
