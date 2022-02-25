import React from "react";

import { useState } from "react";
import { Paper, Typography, Box, Button } from "@mui/material";
import { useDispatch } from "react-redux";
function Note() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  return (
    <Box
      elevation={1}
      component={Paper}
      p={4}
      display="flex"
      flexDirection={"column"}
      alignItems={"center"}
    >
      <Typography
        variant="h3"
        component="h4"
        fontWeight={700}
        m={3}
        textAlign={"center"}
        color={"blue"}
      >
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
          dispatch({
            type: "ADD_TASK",
            payload: { title: title.trim(), text: text.trim() },
          });
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
