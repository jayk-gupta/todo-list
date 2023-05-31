import React, { useState } from "react";

function TaskInput(props) {
  const [enteredTask, setTask] = useState("");

  const inputHanlder = (event) => {
    setTask(event.target.value);
  };


  const clickHanlder = () => {
    const taskData = {
      title: enteredTask,
    };
    props.onSaveTaskData(taskData);
    setTask('');
  };

  return (
    <div className="flex gap-3">
      <input
        type="text"
        className="border-2 p-2 rounded-xl"
        onChange={inputHanlder}
        value= {enteredTask}
      ></input>
      <button
        className="border-2 px-4 bg-violet-300 hover:text-white rounded-xl hover:bg-violet-400"
        onClick={clickHanlder}
      >
        Add
      </button>
    </div>
  );
}

export default TaskInput;
