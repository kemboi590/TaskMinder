import React, { useEffect, useState } from "react";
import "./viewtask.css";
import Axios from "axios";
import { apidomain } from "../../utils/domain";
import { useSelector } from "react-redux";

function ViewTask() {
  const userData = useSelector((state) => state.user.user);
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [titleFilter, setTitleFilter] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("");
  const [dueDateFilter, setDueDateFilter] = useState("");

  const getAllTasks = async () => {
    try {
      const response = await Axios.get(`${apidomain}/tasks`, {
        headers: {
          Authorization: `${userData.token}`,
        },
      });
      setTasks(response.data);
    } catch (response) {
      console.log(response);
    }
  };

  useEffect(() => {
    getAllTasks();
  }, []);

  useEffect(() => {
    // Apply filtering logic whenever any of the filters or tasks change
    let filtered = tasks;

    // Apply title filter
    if (titleFilter !== "") {
      const lowercaseTitleFilter = titleFilter.toLowerCase();
      filtered = filtered.filter((task) =>
        task.title.toLowerCase().includes(lowercaseTitleFilter)
      );
    }

    // Apply priority filter
    if (priorityFilter !== "") {
      filtered = filtered.filter((task) => task.priority === priorityFilter);
    }

    // Apply due date filter
    if (dueDateFilter === "upcoming") {
      const currentDate = new Date().setHours(0, 0, 0, 0);
      filtered = filtered.filter((task) => {
        const taskDueDate = new Date(task.due_date).setHours(0, 0, 0, 0);
        return taskDueDate >= currentDate;
      });
    }

    setFilteredTasks(filtered);
  }, [titleFilter, priorityFilter, dueDateFilter, tasks]);

  return (
    <div className="view_task_page">
      <div className="filter_section">
        <label>Filter By Title:</label>
        <input
          type="text"
          value={titleFilter}
          onChange={(e) => setTitleFilter(e.target.value)}
        />
      </div>
      <div className="filter_section">
        <label>Filter By Priority:</label>
        <select
          value={priorityFilter}
          onChange={(e) => setPriorityFilter(e.target.value)}
        >
          <option value="">All</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>
      <div className="filter_section">
        <label>Filter By Due Date:</label>
        <select
          value={dueDateFilter}
          onChange={(e) => setDueDateFilter(e.target.value)}
        >
          <option value="">All</option>
          <option value="upcoming">Upcoming</option>
        </select>
      </div>
      {filteredTasks.map((task) => {
        return (
          <div className="task_card" key={task._id}>
            <p>title: {task.title}</p>
            <p>description: {task.description}</p>
            <p>priority: {task.priority}</p>
            <p>status: {task.status}</p>
            <p>assigned to: {task.assigned_to}</p>
            <p>created at: {task.created_at}</p>
            <p>due date: {task.due_date}</p>
            <p>Status: {task.status}</p>
          </div>
        );
      })}
    </div>
  );
}

export default ViewTask;
