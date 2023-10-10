import { useState } from "react";
import "../App.css";

function ToDoBar({ onSubmit }) {
  const [task, setTask] = useState([]);

  const handleInputChange = (event) => {
    setTask(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(task);
  };

  return (
    <div>
      <div className="app-container">
        <h1>TODO's</h1>
        <h2>Local Storage CRUD app</h2>
        <h3>CRUD - Create Read Update Delete</h3>
        <form onSubmit={handleFormSubmit}>
          <label className="label">Add todo</label>
          <input className="input" onChange={handleInputChange} value={task} />
          <button onClick={handleFormSubmit} className="button">
            Add
          </button>
        </form>
      </div>
    </div>
  );
}
export default ToDoBar;
