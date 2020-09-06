import React from "react";
import "./Note.css";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { Button } from "@material-ui/core";

function Note({ id, title, content, onRemove }) {
  function passDeleteItem() {
    onRemove(id);
  }

  return (
    <div className="note">
      <h4>{title}</h4>

      <p>{content}</p>

      <Button variant="outlined" onClick={passDeleteItem}>
        <DeleteForeverIcon color="primary" fontSize="large" />
      </Button>
    </div>
  );
}

export default Note;
