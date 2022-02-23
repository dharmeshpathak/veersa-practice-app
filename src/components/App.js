import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Note from "./Note";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Nav from "./Nav";
import Notes from "./Notes";
function App() {
  const [notes, setNotes] = useState([{title:"firsttTTLE",text:"firsttext"},{title:"secondttitle",text:"secondtext"}]);
  const addNotes = (title, text) => {
    setNotes((prev) => {
      return [...prev, { title: title, text: text }];
    });
  };
  const deleteNote =(id)=>{
    console.log("element deleted")
    console.log("id= ",id)
    setNotes(prevNotes=>{
      return prevNotes.filter((todo,index)=>{
        return id!==index;
      })
    })
  }
  

  
  return (
    <BrowserRouter>
      <div className="home">
        <Nav />

        <section>
          <Routes>
            <Route
              path="/veersa-practice-app"
              element={<Note addNotes={addNotes} />}
            />
            <Route
              path="/veersa-practice-app/notes"
              element={<Notes notes={notes} deleteNote={deleteNote}/>}
            />
          </Routes>
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;
