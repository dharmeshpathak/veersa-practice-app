import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Note from "./Note";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Notes from "./Notes";
import EditNote from "./EditNote";
import { Box } from "@mui/material";
function App() {
  return (
    <BrowserRouter>
      <div className="home">
        <Nav />

        <Box display={"flex"} justifyContent={"center"} mt={4}>
          <Routes>
            <Route path="/veersa-practice-app" element={<Note />} />
            <Route path="/veersa-practice-app/notes" element={<Notes />} />
            <Route
              path="/veersa-practice-app/update/:id"
              element={<EditNote />}
            />
          </Routes>
        </Box>
      </div>
    </BrowserRouter>
  );
}

export default App;
