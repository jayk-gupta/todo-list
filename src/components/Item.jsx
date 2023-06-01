import React, { useState } from "react";
import TaskItem from "./TaskItem";

function Item(props) {
  // console.log(props);
  return (
    <div className="flex flex-col gap-4 w-full  sm:w-1/2 p-4 rounded-lg">
      {props.items.map((task) => (
        <TaskItem title={task.title} key={task.id} onDelete={props.onDelete} />
      ))}
    </div>
  );
}

export default Item;
