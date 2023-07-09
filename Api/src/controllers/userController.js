import sql from "mssql";
import config from "./../db/config.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
  const { username, password, email, role } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  console.log(username, email, hashedPassword);
  try {
    let pool = await sql.connect(config.sql);
    let result = await pool
      .request()
      .input("username", sql.VarChar, username)
      .input("email", sql.VarChar, email)
      .query(
        " SELECT * FROM Users WHERE username = @username OR email = @email"
      );
    const user = result.recordset[0];
    if (user) {
      return res.status(409).json({ error: "User already exists" });
    } else {
      await pool
        .request()
        .input("username", sql.VarChar, username)
        .input("email", sql.VarChar, email)
        .input("role", sql.VarChar, role)
        .input("hashedPassword", sql.VarChar, hashedPassword)
        .query(
          "INSERT INTO Users (username, email, role, hashedPassword) VALUES (@username, @email, @role, @hashedPassword)"
        );
      return res.status(201).json({ message: "User created successfully" });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
