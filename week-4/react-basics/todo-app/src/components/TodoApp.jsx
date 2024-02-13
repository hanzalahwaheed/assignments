import React, { useState } from "react";
import List from "./List";

const TodoApp = () => {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (input.trim() !== "") {
      setTasks([...tasks, input]);
      setInput("");
    }
  };

  return (
    <div>
        <h1>Todo App</h1>
      <form onSubmit={handleSubmit} id="todo-form">
        <input type="text" value={input} onChange={handleInput} />
        <button type="submit">Add</button>
      </form>
      <hr />
      <List tasks={tasks} />
    </div>
  );
};

export default TodoApp;


