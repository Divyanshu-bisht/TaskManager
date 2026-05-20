import React from "react";
import { useEffect, useState } from "react";
import API from "../api/axios";
import "./dashboard.css";

export default function Dashboard() {
  const [editId, setEditId] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const fetchTasks = async () => {
    const res = await API.get("/tasks");
    setTasks(res.data.tasks);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const createTask = async () => {
    if (!title.trim()) return;
    await API.post("/tasks", { title });
    setTitle("");
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await API.delete(`/tasks/${id}`);
    fetchTasks();
  };

  const updateTask = async (id) => {
  try {
    await API.put(`/tasks/${id}`, {
      title,
    });

    setTitle("");
    setEditId(null);

    fetchTasks();
  } catch (error) {
    console.log(error);
  }
};

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") createTask();
  };

  return (
    <div className="dashboard">
      <div className="dashboard-inner">
        {/* Header */}
        <div className="dashboard-header">
          <h1 className="dashboard-h1">Dashboard</h1>
          <button className="dashboard-logout" onClick={logout}>
            Logout
          </button>
        </div>

        {/* Add task */}
        <div className="dashboard-compose">
          <input
            className="dashboard-input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Enter task"
          />
          <button
            className="dashboard-add"
            onClick={() => {
              if (editId) {
                updateTask(editId);
              } else {
                createTask();
              }
            }}
          >
            {editId ? "Update Task" : "Add Task"}
          </button>
        </div>

        {/* Task list */}
        <div className="dashboard-tasklist">
          {tasks.length === 0 ? (
            <p className="dashboard-empty">No tasks yet — add one above.</p>
          ) : (
            tasks.map((task) => (
              <div className="dashboard-task" key={task._id}>
                <p className="dashboard-task-title">{task.title}</p>

                <div className="dashboard-actions">
                  <button
                    className="dashboard-delete"
                    onClick={() => {
                      setTitle(task.title);
                      setEditId(task._id);
                    }}
                  >
                    Edit
                  </button>

                  <button
                    className="dashboard-delete dashboard-edit"
                    onClick={() => deleteTask(task._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
