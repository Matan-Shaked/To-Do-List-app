import { useEffect, useState } from "react";
import ToDoBar from "./components/ToDoBar";
import ToDoList from "./components/ToDoList";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const response = await axios.get("http://localhost:3001/tasks");
    setTasks(response.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const createTask = async (newTask) => {
    const response = await axios.post("http://localhost:3001/tasks", {
      tasks: newTask,
    });
    const updatedTasks = [...tasks, response.data];
    setTasks(updatedTasks);
  };

  const deleteTaskById = async (id) => {
    await axios.delete(`http://localhost:3001/tasks/${id}`);
    const updatedTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(updatedTasks);
  };

  return (
    <div className="app-container">
      <ToDoBar onSubmit={createTask} />
      <ToDoList tasks={tasks} onDelete={deleteTaskById} />
    </div>
  );
}
export default App;
