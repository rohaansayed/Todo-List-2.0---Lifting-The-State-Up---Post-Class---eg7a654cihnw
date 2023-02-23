import React, { useState, useRef } from "react";

const Inbox = (props) => {
 const [newTask, setNewTask] = useState(false);
  const titleRef = useRef(null);
  const dateRef = useRef(null);

  const handleNewTaskClick = () => {
    setNewTask(true);
  };

  const handleAddTaskClick = (event) => {
    event.preventDefault();

    const newTitle = titleRef.current.value;
    const newDate = dateRef.current.value;

    // Create a new task object and add it to the list
    const newTask = { title: newTitle, date: newDate };
    props.addTask(newTask);

    // Reset the form
    titleRef.current.value = "";
    dateRef.current.value = "2022-09-27";
    setNewTask(false);
  };

  const handleCancelClick = () => {
    titleRef.current.value = "";
    dateRef.current.value = "2022-09-27";
    setNewTask(false);
  };
 

  return (
    <div>
      <h3>Inbox</h3>
      {!newTask && (
        <button className="new" onClick={handleNewTaskClick} id='add-new'>
          +Add New
        </button>
      )}
      {newTask && (
        <form className="newtask-box">
          <input type="text" id="title" ref={}></input>
          <div className="buttons">
            <button className="new" id="add-list" onClick={handleAddTaskClick}>
              Add Task
            </button>
            <button className="new" onClick={handleCancelClick}>
              Cancel
            </button>
            <input
              type="date"
              ref={}
              defaultValue="2022-09-27"
              id="date"
            ></input>
          </div>
        </form>
      )}
      <div id="inbox">
        {props.list.map((list) => {
          return (
            <div className="box" key={index}>
              <div className="task">
                {list.title} ({list.date})
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Inbox;
