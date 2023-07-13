import React, { useEffect, useState } from "react";
import "./singleTask.css";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Axios from "axios";
import { apidomain } from "./../../utils/domain";

function SingleTask() {
  const { id } = useParams();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.user.user);

  const [task, setTask] = useState([]);

  const fetchSingleTask = async () => {
    try {
      const response = await Axios.get(`${apidomain}/tasks/${id}`, {
        headers: {
          Authorization: `${userData.token}`,
        },
      });
      setTask(response.data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSingleTask();
  }, [id]);

  return (
    <div className="task_page">
      <table className="single_task_table">
        <tbody>
          {task.map((task) => (
            <React.Fragment key={task.id}>
              <tr>
                <td>Title:</td>
                <td>{task.title}</td>
              </tr>
              <tr>
                <td>Description:</td>
                <td>{task.description}</td>
              </tr>
              <tr>
                <td>Priority:</td>
                <td>{task.priority}</td>
              </tr>
              <tr>
                <td>Due Date:</td>
                <td>{task.due_date}</td>
              </tr>
              <tr>
                <td>Status:</td>
                <td>Not done</td>
              </tr>
              <tr>
                <td>Assigned To:</td>
                <td>{task.username}</td>
              </tr>
              <tr>
                <td>Created At:</td>
                <td>{task.created_at}</td>
              </tr>
              <tr>
                <td>Email:</td>
                <td>{task.email}</td>
              </tr>
              <tr>
                <td>Task ID:</td>
                <td>{task.task_id}</td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SingleTask;
