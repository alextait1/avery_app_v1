import React from "react";

export const ToDoItem = props => {
  // const handleClick = () => {
  //   alert(this);
  // };
  return (
    <div className="task-item-container" id={props.id}>
      <div className="image-name-container">
        <div className="task-name">
          <h3>{props.taskName}</h3>
        </div>
        <img src={props.src} alt={props.src} />
      </div>
      <div className="item-container">
        <button onClick={props.handleClick}>Done</button>
      </div>
    </div>
  );
};
