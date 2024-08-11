import React from "react";

function Task({ text, category }) {

  const removeTask = (elem) => {
    const parentElem = elem.parentElement;
    parentElem.remove()
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={(e) => removeTask(e.target)}>X</button>
    </div>
  );
}

export default Task;
