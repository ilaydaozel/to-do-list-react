import React, { useState } from "react";
import ToDoItem from "./ToDoItem.jsx";
import InputArea from "./InputArea";

function App() {
  const [itemArray, setItemArray] = useState([]);

  function addItem(item) {
    setItemArray(function () {
      return [...itemArray, item];
    });
  }

  function deleteItem(id) {
    setItemArray((prevValues) => {
      return prevValues.filter((value, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onClicked={addItem} />

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
