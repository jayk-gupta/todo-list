import React, { useState } from "react";
import "./TaskInput.css";
import styled from "styled-components";

// For pesudo selectors we use &

// const Button = styled.button`
//   padding: 5px;

//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//   background-color: purple;

//   &:hover {
//     cursor: pointer;
//     color: white;
//     border: 1px solid white;
//   }
// `;

const FormControl = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;

  @media (max-width: 640px) {
    flex-direction: column;
    gap:20px;
  }

  ${
    "" /* 
& label {
color: ${props => props.invalid ? 'red': 'white'}
} */
  }

  & input {
    ${"" /* background-color: ${props => props.invalid ? 'red' : ''}; */}
    ${"" /* border: 2px solid ${props => props.invalid ? 'red': ''} */}
  }
`;
/*
props for styling:
We pass an arrow fucntion and it should return the text that should be there in that postion

*/ 
function TaskInput(props) {
  const [enteredTask, setTask] = useState("");
  const [isValid, setIsValid] = useState(true);

  const inputHanlder = (event) => {
    setTask(event.target.value);
  };

  const clickHanlder = () => {
    if (enteredTask.trim().length === 0) {
      setIsValid(false);
      alert('Please enter a task');
      return;
    }
    const taskData = {
      title: enteredTask,
    };
    props.onSaveTaskData(taskData);
    setTask("");
  };

  return (
    // <div className={`flex gap-3 `}>
    <FormControl invalid={!isValid}>
        <label className="text-white text-lg">
          Enter Task
          {/* INPUT */}
          <input
            type="text"
            className={`border-2 p-2 rounded-xl mx-4 text-black
   `}
            onChange={inputHanlder}
            value={enteredTask}
          ></input>
        </label>

      {/* BUTTON */}
      <button
        className="hover:border-2 py-4 sm:px-4 bg-purple-500 hover:text-white rounded-xl text-slate-200 hover:bg-purple-600"
        onClick={clickHanlder}
      >
        Add
      </button>
    </FormControl>
    // </div>
  );
}

export default TaskInput;

//         ${!isValid ? "invalid" : ""}
