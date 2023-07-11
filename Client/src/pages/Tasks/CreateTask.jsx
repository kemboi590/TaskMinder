import React from "react";
import "./createtask.css";

function CreateTask() {
  return (
    <div className="create_task_page">
      <form>
        <div className="task_form">
          <div>
            <label className="task_title"> Task Title</label>
            <br />
            <input
              className="title_input"
              type="tect"
              placeholder="your task title"
              // {...register("Email")}
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
              placeholder=" your task description"
              // {...register("Email")}
            ></textarea>
          </div>
          <br />
          <div>
            <label className="task_assign_to">Assign Task To</label>
            <br />
            <div className="check_member">
              <input type="checkbox" id="" value="Kemboi" />
              <label htmlFor="">kemboi</label>
              <input type="checkbox" id="" value="Kemboi" />
              <label htmlFor="">kemboi</label>
              <br />
              <input type="checkbox" id="" value="Kemboi" />
              <label htmlFor="">kemboi</label>
              <br />
              <input type="checkbox" id="" value="Kemboi" />
              <label htmlFor="">kemboi</label>
              <br />
              <input type="checkbox" id="" value="Kemboi" />
              <label htmlFor="">kemboi</label>
              <input type="checkbox" id="" value="Kemboi" />
              <label htmlFor="">kemboi</label>
              <br />
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
              // {...register("Email")}
            />
          </div>
          <br />
          {/* set priority by using radio butons*/}
          <div>
            <label className="task_priority">Priority</label>
            <br />
            <div className="radio_task">
              <input
                type="radio"
                className="radio_priority"
                // {...register("Email")}
              />
              <label className="task_priority">High</label>
              <input
                type="radio"
                className="radio_priority"
                // {...register("Email")}
              />
              <label className="task_priority">Medium</label>
              <input
                type="radio"
                className="radio_priority"
                // {...register("Email")}
              />
              <label className="priority">Low</label>
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
