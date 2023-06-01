import { useState } from "react";
import TaskInput from "./components/TaskInput";
import Item from "./components/Item";

const tasks = [
  {
    id: 1,
    title: "Revise Event Loop",
  },
  {
    id: 2,
    title: "Start TodoList project",
  },
  {
    id: 3,
    title: "Check Github",
  },
];

const App = () => {
  const [taskList, setTasks] = useState(tasks);

  const addTaskHandler = (task) => {
    return setTasks((prevTasks) => [task, ...prevTasks]);
  };

  const deleteHandler = (taskName) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.title !== taskName));
  };

  return (
    <div className="App flex h-screen bg-gradient-to-r from-purple-500 to-pink-500 flex-col items-center gap-12 p-6 ">
      <TaskInput onSaveTaskData={addTaskHandler} />
      <Item items={taskList} onDelete={deleteHandler} />
    </div>
  );
};

export default App;
