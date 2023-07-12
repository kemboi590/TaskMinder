import sql from "mssql";
import config from "./../db/config.js";

// get all tasks
export const getAllTasks = async (req, res) => {
  try {
    let pool = await sql.connect(config.sql);
    let result = await pool.request().query("SELECT * FROM Tasks");
    if (result.recordset.length === 0) {
      res.status(404).json({ message: "No tasks found!" });
    } else {
      res.json(result.recordset);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//  Create a task
export const createTask = async (req, res) => {
  try {
    const {
      title,
      description,
      created_at,
      due_date,
      priority,
      status,
      assigned_to,
    } = req.body;
    let pool = await sql.connect(config.sql);
    await pool
      .request()
      .input("title", sql.VarChar, title)
      .input("description", sql.VarChar, description)
      .input("created_at", sql.Date, created_at)
      .input("due_date", sql.Date, due_date)
      .input("priority", sql.VarChar, priority)
      .input("status", sql.VarChar, status)
      .input("assigned_to", sql.Int, assigned_to)
      .query(
        "INSERT INTO Tasks ( title, description, created_at, due_date, priority, status, assigned_to) VALUES ( @title, @description,  GETDATE(), @due_date, @priority, @status, @assigned_to)"
      );

    res.status(201).json({ message: "Task created successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single task
export const getSingleTask = async (req, res) => {
  try {
    const { id } = req.params;
    let pool = await sql.connect(config.sql);
    let result = await pool
      .request()
      .input("id", sql.Int, id)
      .query("SELECT * FROM Tasks WHERE task_id = @id");

    if (result.recordset.length === 0) {
      res.status(404).json({ message: "Task not found!" });
    } else {
      res.json(result.recordset);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a task
export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      title,
      description,
      created_at,
      due_date,
      priority,
      status,
      assigned_to,
    } = req.body;
    let pool = await sql.connect(config.sql);
    await pool
      .request()
      .input("id", sql.Int, id)
      .input("title", sql.VarChar, title)
      .input("description", sql.VarChar, description)
      .input("created_at", sql.Date, created_at)
      .input("due_date", sql.Date, due_date)
      .input("priority", sql.VarChar, priority)
      .input("status", sql.VarChar, status)
      .input("assigned_to", sql.VarChar, assigned_to)
      .query(
        "UPDATE Tasks SET title = @title, description = @description, created_at =  GETDATE(), due_date = @due_date, priority = @priority, status = @status, assigned_to = @assigned_to WHERE task_id = @id"
      );

    res.status(200).json({ message: "Task updated successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a task
export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    let pool = await sql.connect(config.sql);
    await pool
      .request()
      .input("id", sql.Int, id)
      .query("DELETE FROM Tasks WHERE task_id = @id");
    res.status(200).json({ message: "Task deleted successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
