import { useEffect, useState } from "react";
import API from "../services/api";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  // Get tasks
  const fetchTasks = async () => {
    const res = await API.get("/tasks");
    setTasks(res.data);
  };

  // Create task
  const createTask = async () => {
    if (!title) return;

    await API.post("/tasks", {
      title,
      description: "Added from UI",
    });

    setTitle("");
    fetchTasks();
  };

  // Delete task
  const deleteTask = async (id) => {
    await API.delete(`/tasks/${id}`);
    fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Dashboard</h2>

      {/* Create Task */}
      <input
        placeholder="Enter task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={createTask}>Create</button>

      {/* Task List */}
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            <b>{task.title}</b>
            <button onClick={() => deleteTask(task._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}