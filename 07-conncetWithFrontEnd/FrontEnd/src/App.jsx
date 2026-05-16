import { useState } from "react";
import "./index.css";

function App() {
  const [notes, setNotes] = useState([
    {
      name: "zahid",
      age: 20,
    },
    {
      name: "Rehan",
      age: 25,
    },
    {
      name: "Azhan",
      age: 24,
    },
  ]);

  return (
    <>
      <button className="getDetailsButton">getDetails</button>

      <div className="notesCollection">
        {notes.map((note, index) => {
          return (
            <div className="notes" key={index}>
              <h1>{note.name}</h1>
              <h2>{note.age}</h2>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
