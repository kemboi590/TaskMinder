import React from "react";
import "./createtask.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";


const schema = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  // assign to is an array
  assigned_to: yup.array().min(1, "Assign to is required"),

  due_date: yup.string().required("Due date is required"),
  priority: yup.string().required("Priority is required"),
});

function CreateTask() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {


    console.log(data);
    // reset();
  };
  return (
    <div className="create_task_page">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="task_form">
          <div>
            <label className="task_title"> Task Title</label>
            <br />
            <input
              className="title_input"
              type="tect"
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
              <input
                type="checkbox"
                value="Kemboi"
                {...register("assigned_to")}
              />

              <label htmlFor="">kemboi</label>

              <input
                type="checkbox"
                value="Kemboi"
                {...register("assigned_to")}
              />
              <label htmlFor="">kemboi</label>

              <br />

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
                className="radio_priority"
                {...register("priority")}
              />
              <label className="task_priority">High</label>
              <input
                type="radio"
                name="priority"
                className="radio_priority"
                {...register("priority")}
              />
              <label className="task_priority">Medium</label>
              <input
                type="radio"
                name="priority"
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

export default CreateTask;
