import React, { useState } from "react";

function ToDoItem(props) {
  const [isCrossed, setCrossed] = useState(false);
  function handleClick() {
    setCrossed((prevValue) => !prevValue);
  }

  return (
    <li
      style={isCrossed ? { textDecoration: "line-through" } : "none"}
      onClick={handleClick}
    >
      {props.content}
    </li>
  );
}

export default ToDoItem;
