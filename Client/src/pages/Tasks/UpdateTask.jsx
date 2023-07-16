import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { apidomain } from "../../utils/domain";
import { useSelector } from "react-redux";

function UpdateTask({ setshowUpdateForm, task, fetchSingleTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [assigned_to, setAssigned_to] = useState("");
  const [due_date, setDue_date] = useState("");
  const [priority, setPriority] = useState("");

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
      setAssigned_to(task.assigned_to || ""); // Initialize with empty string
      const formattedDueDate = task.due_date.split("T")[0];
      setDue_date(formattedDueDate);
      setPriority(task.priority || ""); // Initialize with empty string
    }
  }, [task]);

  const [users, setUsers] = useState([]);
  const userData = useSelector((state) => state.user.user);
  const navigate = useNavigate();

  const getAllUsers = async () => {
    try {
      const response = await Axios.get(`${apidomain}/users`, {
        headers: {
          Authorization: `${userData.token}`,
        },
      });
      setUsers(response.data);
    } catch (error) {
      console.log("error fetching users");
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await Axios.put(
      `${apidomain}/tasks/${task.task_id}`,
      {
        title: title,
        description: description,
        assigned_to: assigned_to,
        due_date: due_date,
        priority: priority,
      },
      {
        headers: {
          Authorization: `${userData.token}`,
        },
      }
    )
      .then((response) => {
        console.log(response);
        fetchSingleTask();
      })
      .catch((response) => {
        console.log(response);
      });
  };

  return (
    <div className="create_task_page">
      <form>
        <div className="task_form">
          <div>
            <label className="task_title"> Task Title</label>
            <br />
            <input
              className="title_input"
              type="text"
              placeholder="your task title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              name="title"
            />
          </div>
          <br />
          <div>
            <label className="task_description">Description</label>
            <br />
            <textarea
              className="description_input"
              cols="30"
              rows="10"
              placeholder="your task description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              name="description"
            ></textarea>
          </div>
          <br />
          <div>
            <label className="task_assign_to">Assign Task To</label>
            <br />
            <div className="check_member">
              {users.map((user) => (
                console.log(user),
                <React.Fragment key={user.user_id}>
                  <input
                    type="radio"
                    value={user.user_id}
                      name="assigned_to" 
                    onChange={(e) => setAssigned_to(e.target.value)}
                  />
                  <label htmlFor="">{user.username}</label>
                </React.Fragment>
              ))}
            </div>
          </div>
          <br />
          <div>
            <label className="task_dueDate">Due Date</label>
            <br />
            <input
              type="date"
              name="due_date" // Add the name attribute
              className="dueDate_calender"
              value={due_date}
              onChange={(e) => setDue_date(e.target.value)}
            />
          </div>
          <br />
          <div>
            <label className="task_priority">Priority</label>
            <br />
            <div className="radio_task">
              <input
                type="radio"
                name="priority"
                value="High"
                className="radio_priority"
                checked={priority === "High"}
                onChange={(e) => setPriority(e.target.value)}
              />
              <label className="task_priority">High</label>
              <input
                type="radio"
                name="priority"
                value="Medium"
                className="radio_priority"
                checked={priority === "Medium"}
                onChange={(e) => setPriority(e.target.value)}
              />
              <label className="task_priority">Medium</label>
              <input
                type="radio"
                name="priority"
                value="Low"
                className="radio_priority"
                checked={priority === "Low"}
                onChange={(e) => setPriority(e.target.value)}
              />
              <label className="priority">Low</label>
            </div>
          </div>
          <br />
          <button onClick={handleSubmit} className="submit_task">
            Update Task
          </button>
        </div>
      </form>
    </div>
  );
}

export default UpdateTask;
