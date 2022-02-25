import { Button } from "@mui/material";
import React from "react";
import { Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function NoteCard({ todo, id }) {
  const dispatch = useDispatch();

  return (
    <Card style={{ width: "18rem", margin: "10px" }}>
      <Card.Body>
        <Card.Title>{todo.title}</Card.Title>

        <Card.Text>{todo.text}</Card.Text>

        <Button
          variant="light"
          onClick={() => dispatch({ type: "DELETE_TASK", payload: { id: id } })}
        >
          Delete
        </Button>

        <Link to={`/veersa-practice-app/update/${id}`}>
          <Button variant="light">Update</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default NoteCard;
