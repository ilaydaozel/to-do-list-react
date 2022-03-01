import React, { useState } from "react";
import ToDoItem from "./ToDoItem.jsx";

function App() {
  const [item, setItem] = useState("");
  const [itemArray, setItemArray] = useState([]);

  function handleChange(event) {
    const newItem = event.target.value;
    setItem(newItem);
  }

  function handleClick() {
    setItemArray(function () {
      return [...itemArray, item];
    });
    setItem("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>

      <div className="form">
        <input onChange={handleChange} type="text" value={item} />
        <button onClick={handleClick}>
          <span>Add</span>{" "}
        </button>
      </div>

      <div>
        <ul>
          {console.log(itemArray)}
          {itemArray.map((elm) => (
            <ToDoItem content={elm}/>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
