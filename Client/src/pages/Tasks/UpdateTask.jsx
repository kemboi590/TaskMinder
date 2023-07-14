import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { apidomain } from "../../utils/domain";
import { useSelector } from "react-redux";

const schema = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  assigned_to: yup.number("Assign to is required"),

  due_date: yup
    .string()
    .required("Due date is required")
    .test("due-date", "Due date must be in the future", (value) => {
      const selectedDate = new Date(value);
      const currentDate = new Date();
      return selectedDate >= currentDate;
    }),
  priority: yup.string().required("Priority is required"),
});

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
      setAssigned_to(task.assigned_to);
        // setDue_date(task.due_date);
        const formattedDueDate = task.due_date.split("T")[0]; // Extract the date part
        setDue_date(formattedDueDate);
      setPriority(task.priority);
    }
  }, [task]);

  const [users, setUsers] = useState([]);
  const userData = useSelector((state) => state.user.user);
  const navigate = useNavigate();
  // console.log(userData);

  const getAllUsers = async () => {
    try {
      const response = await Axios.get(`${apidomain}/users`, {
        headers: {
          Authorization: `${userData.token}`,
        },
      });
      // console.log(response);
      setUsers(response.data);
    } catch (error) {
      console.log("error fetching users");
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="create_task_page">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="task_form">
          <div>
            <label className="task_title"> Task Title</label>
            <br />
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="title_input"
              type="text"
              placeholder="your task title"
              {...register("title")}
            />

            {errors.title && <p className="errors">{errors.title.message}</p>}
          </div>
          <br />
          <div>
            <label className="task_description">Description</label>
            <br />
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="description_input"
              cols="30"
              rows="10"
              placeholder=" your task description"
              {...register("description")}
            ></textarea>

            {errors.description && (
              <p className="errors">{errors.description.message}</p>
            )}
          </div>
          <br />
          <div>
            <label className="task_assign_to">Assign Task To</label>
            <br />
            <div className="check_member">
              {users.map((user) => (
                <React.Fragment key={user.user_id}>
                  <input
                    type="radio"
                    value={user.user_id}
                    {...register("assigned_to")}
                  />

                  <label htmlFor="">{user.username}</label>
                </React.Fragment>
              ))}

              {errors.assigned_to && (
                <p className="errors">{errors.assigned_to.message}</p>
              )}
            </div>
          </div>

          <br />
          {/* calender to choose due date */}
          <div>
            <label className="task_dueDate">Due Date</label>
            <br />
            <input
              value={due_date}
              onChange={(e) => setDue_date(e.target.value)}
              type="date"
              name="dueDate"
              className="dueDate_calender"
              {...register("due_date")}
            />

            {errors.due_date && (
              <p className="errors">{errors.due_date.message}</p>
            )}
          </div>
          <br />
          {/* set priority by using radio butons*/}
          <div>
            <label className="task_priority">Priority</label>
            <br />
            <div className="radio_task">
              <input
                type="radio"
                name="priority"
                value="High"
                className="radio_priority"
                {...register("priority")}
              />
              <label className="task_priority">High</label>
              <input
                type="radio"
                name="priority"
                value="Medium"
                className="radio_priority"
                {...register("priority")}
              />
              <label className="task_priority">Medium</label>
              <input
                type="radio"
                name="priority"
                value="Low"
                className="radio_priority"
                {...register("priority")}
              />

              <label className="priority">Low</label>

              {errors.priority && (
                <p className="errors">{errors.priority.message}</p>
              )}
            </div>
          </div>
          <br />

          {/* a submit button saying create task */}
          <input type="submit" value="Create Task" className="submit_task" />
        </div>
      </form>
    </div>
  );
}

export default UpdateTask;