import React, { useState } from "react";

function InputArea(props) {
  const [item, setItem] = useState("");

  function handleChange(event) {
    const newItem = event.target.value;
    setItem(newItem);
  }

  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={item} />
      <button
        onClick={() => {
          props.onClicked(item);
          setItem("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
