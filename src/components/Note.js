import React from "react";
// import "./Note.css";
import { useState } from "react";
import { Paper, Typography, Box, Button } from "@mui/material";
function Note({ addNotes }) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  return (
    <Box
      elevation={1}
      component={Paper}
      p={4}
      display="flex"
      flexDirection={"column"}
      alignItems={"center"}
    >
      <Typography variant="h3" component="h4" fontWeight={700} m={3} textAlign = {"center"} color = {"blue"}>
        ADD NOTES HERE
      </Typography>
      <input
        name="title"
        placeholder="Enter note"
        value={title}
        className="inputField"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        name="text"
        placeholder="Enter Details"
        value={text}
        className="inputField"
        onChange={(e) => setText(e.target.value)}
      />
      
      
      <Button
        variant="outlined"
        onClick={() => {
          addNotes(title, text);
          setText("");
          setTitle("");
        }}
      >
        ADD NOTE
      </Button>
    </Box>
  );
}

export default Note;
