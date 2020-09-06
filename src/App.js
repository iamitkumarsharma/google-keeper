import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import KeeperForm from "./components/KeeperForm";
import Note from "./components/Note";

function App() {
  const [mynote, setMynote] = useState([]);

  const addnote = (newnote) => {
    setMynote((prevValue) => {
      return [...prevValue, newnote];
    });
  };

  const removeItem = (id) => {
    console.log("delete item");
    setMynote((prevNotes) => {
      return prevNotes.filter((noteitems, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className="app">
      <Header />
      <KeeperForm newNote={addnote} />
      <div className="app_note">
        {mynote.map((noteitems, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={noteitems.title}
              content={noteitems.content}
              onRemove={removeItem}
            />
          );
        })}
      </div>

      <Footer />
    </div>
  );
}

export default App;
