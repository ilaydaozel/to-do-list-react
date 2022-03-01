import React, { useState } from "react";
import ToDoItem from "./ToDoItem.jsx";

function App() {
  const [item, setItem] = useState("");
  const [itemArray, setItemArray] = useState([]);

  function handleChange(event) {
    const newItem = event.target.value;
    setItem(newItem);
  }

  function addItem() {
    setItemArray(function () {
      return [...itemArray, item];
    });
    setItem("");
  }

  function deleteItem() {
    console.log("delete it");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>

      <div className="form">
        <input onChange={handleChange} type="text" value={item} />
        <button onClick={addItem}>
          <span>Add</span>{" "}
        </button>
      </div>

      <div>
        <ul>
          {console.log(itemArray)}
          {itemArray.map((elm, index) => (
            <ToDoItem
              key={index}
              id={index}
              content={elm}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
