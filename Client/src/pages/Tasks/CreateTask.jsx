import React from "react";

function CreateTask() {
  return (
    <div className="create_task_page">
      <h2>Create Task</h2>
      <div className="task_form">
        <form action="">
          <label htmlFor="title">Title</label>
          <br />
          <input
            className="title_input"
            type="tect"
            placeholder="task title"
            // {...register("Email")}
          />
          <br />
          <label htmlFor="description">Description</label>
          <br />
          <textarea
            className="title_input"
            cols="30"
            rows="10"
            // {...register("Email")}
          ></textarea>
          <br />
          <label htmlFor="status">Status</label>
          <br />
          {/* create a check box with a lable assign task to: */}
          <label htmlFor="status">Assign Task To:</label>

          <input type="checkbox" id="" value="Kemboi" />
          <label htmlFor="">kemboi</label>

          <br />
          {/* calender to choose due date */}
          <label htmlFor="dueDate">Due Date</label>
          <br />
          <input type="date" name="dueDate" id="dueDate" />
          <br />
          {/* set priority by using radio butons*/}
          <label htmlFor="priority">Priority</label>
          <br />
          <input type="radio" name="priority" id="priority" />
          <label htmlFor="priority">High</label>
          <input type="radio" name="priority" id="priority" />
          <label htmlFor="priority">Medium</label>
          <input type="radio" name="priority" id="priority" />
          <label htmlFor="priority">Low</label>
          <br />

          {/* a submit button saying create task */}
          <input type="submit" value="Create Task" className="submit_btn" />
        </form>
      </div>
    </div>
  );
}

export default CreateTask;
