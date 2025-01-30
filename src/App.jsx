import React from "react";
import { useState } from "react";

function App() {
  const [content, setContent] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task === "") return;
    setContent([...content, task]);
  };

  const deleteTask = (index) => {
    const removeTask = content.filter((_, i) => i != index);
    setContent(removeTask);
  }

  return (
    <div className="flex min-h-screen justify-center items-center">
      <div className="bg-[#46494C] flex flex-col justify-center gap-10 items-center py-10 min-h-40 w-100 text-white rounded-md px-5">
        <div className="flex flex-col items-center gap-5 w-full">
          <h1 className="text-2xl font-medium">Get things done</h1>
          <div className="flex w-full justify-between items-center px-2 h-13 rounded-md border-2 border-gray-400">
            <input
              className="outline-0 w-[70%] px-1"
              type="text"
              placeholder="Add new task"
              onChange={(e) => {
                setTask(e.target.value);
              }}
            />
            <button
              onClick={addTask}
              className="bg-[#8E94F2] hover:bg-[#5E548E] transition-all px-3 h-9 rounded-md cursor-pointer text-sm"
            >
              Add task
            </button>
          </div>
        </div>

        <div className="w-full gap-4 flex flex-col">
          {content.map((item, index) => (
            <div className="flex items-center gap-2 w-full px-5 bg-[#8E94F2] justify-between h-12 rounded-md" key={index}>
              <p>{item}</p>
              <div className="flex gap-2">
                <img
                  className="w-5 invert cursor-pointer"
                  src="./img/edit.svg"
                  alt="edit"
                />
                <img
                  className="w-5 invert cursor-pointer"
                  src="./img/delete.svg"
                  alt="delete"
                  onClick={() => deleteTask(index)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
