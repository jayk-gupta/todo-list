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
        className="bg-[#7c2bff] p-6 drop-shadow-3xl  sm:text-xl m-2 flex justify-between rounded-lg text-white hover:border-2 white"
        style={{
          backgroundColor: taskStatus ? "#8ce99a" : "",
          opacity: taskStatus ? "0.5" : "1",
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
