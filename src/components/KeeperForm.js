import React, { useState } from "react";
import "./KeeperForm.css";
import { Button } from "@material-ui/core";

function KeeperForm(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((preValue) => {
      return { ...preValue, [name]: value };
    });
  }

  console.log("note", note);

  const submitNote = (event) => {
    //prevent refrest behaviour of from
    props.newNote(note);
    setNote({
      //make input feild empaty on click
      title: "",
      content: "",
    });
    event.preventDefault();
  };

  return (
    <div className="keeperform">
      <form>
        <input
          name="title"
          value={note.title}
          onChange={handleChange}
          placeholder="Title"
        />
        <br />
        <textarea
          name="content"
          value={note.content}
          onChange={handleChange}
          row="3"
          placeholder="Content"
        />
        <br />

        <Button
          disabled={!note.title || !note.content}
          type="submit"
          color="primary"
          variant="contained"
          onClick={submitNote}
        >
          ADD
        </Button>
      </form>
    </div>
  );
}

export default KeeperForm;
