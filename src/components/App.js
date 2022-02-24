import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Note from "./Note";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Nav from "./Nav";
import Notes from "./Notes";
import EditNote from "./EditNote";
function App() {
  const [notes, setNotes] = useState([{title:"firsttTTLE",text:"firsttext"},{title:"secondttitle",text:"secondtext"}]);
  const addNotes = (title, text) => {
    const noteTitle = title.trim();
    const noteText = text.trim();
    if(noteText!=="" && noteTitle !== ""){
      setNotes((prev) => {
        return [...prev, { title: noteTitle, text: noteText }];
      });

    }
    
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
  
  const editNote = (id,title,text)=>{
    console.log("edited");
    
    console.log(id);
    console.log(title);
    console.log(text);
   const newList  = notes.map((todo,index)=>{
     if(+id===index){
      console.log(id);
      console.log( index);
       todo.title = title;
       todo.text = text;

     }
     return todo;
   })
  
   console.log(newList)


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
              element={<Notes notes={notes} deleteNote={deleteNote} />}
            />
            <Route
              path="/veersa-practice-app/update/:id"
              element={<EditNote notes={notes} editNote={editNote}/>}
            />
          </Routes>
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;
