import React from "react";
import { Paper, Typography, Box, Button } from "@mui/material";
import "./Note.css";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
function EditNote() {
  const { id } = useParams();
  const note = useSelector((state) => state.notes[id]);
  console.log("note = ", note);
  const [title, setTitle] = useState(note.title);
  const [text, setText] = useState(note.text);

  const dispatch = useDispatch();
  console.log(id, title, text);

  return (
    <Box
      elevation={1}
      component={Paper}
      p={4}
      display="flex"
      flexDirection={"column"}
      alignItems={"center"}
    >
      <Typography variant="h3" component="h2" fontWeight={700} m={3}>
        Update NOTES HERE
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
          dispatch({
            type: "EDIT_TASK",
            payload: { id: id, title: title, text: text },
          });
        }}
      >
        Update NOTE
      </Button>
    </Box>
  );
}

export default EditNote;
