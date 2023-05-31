import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";

function TaskItem(props) {
  // console.log(props);
  const [taskStatus, setTaskStatus] = useState(false);


  const checkHandler = (event) => {
    if (event.target.value) {
      setTaskStatus((status) => !status);
   }
  };

  const deleteHandler = (task) => {
    props.onDelete(task);
  };

  return (
    <div>
      <div
        className="bg-blue-200 p-4 text-lg m-2 flex justify-between rounded-lg"
        style={{
          backgroundColor: taskStatus ? "#8ce99a" : "",
          opacity: taskStatus ? '0.5':'1'
        }}
      >
        <h2>{props.title}</h2>
        <div className="flex items-center gap-2">
          <input type="checkbox" onChange={checkHandler} />
          <AiFillDelete
            className="text-blue-400 hover:text-blue-800 hover:cursor-pointer"
            onClick={() => deleteHandler(props.title)}
          />
        </div>
      </div>
    </div>
  );
}

export default TaskItem;
