-- Create Users table
CREATE TABLE Users (
    user_id INT IDENTITY(1,1) PRIMARY KEY,
    username VARCHAR(255),
    hashedpassword VARCHAR(255),
    email VARCHAR(255),
    role VARCHAR(100)
);


-- Create Tasks table
CREATE TABLE Tasks (
    task_id INT IDENTITY(1,1) PRIMARY KEY,
    title VARCHAR(255),
    description VARCHAR(MAX),
    created_at DATE,
    due_date DATE,
    priority VARCHAR(50),
    status VARCHAR(50),
    assigned_to INT,
    FOREIGN KEY (assigned_to) REFERENCES Users(user_id) ON DELETE CASCADE
);


-- Create Comments table
CREATE TABLE Comments (
    comment_id INT IDENTITY(1,1) PRIMARY KEY,
    task_id INT,
    user_id INT,
    timestamp DATETIME,
    content VARCHAR(MAX),
    FOREIGN KEY (task_id) REFERENCES Tasks(task_id),
    FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE CASCADE
);

-- Create Notifications table
CREATE TABLE Notifications (
    notification_id INT IDENTITY(1,1) PRIMARY KEY,
    user_id INT,
    timestamp DATETIME,
    content VARCHAR(MAX),
    FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE CASCADE
);

				--INSERTING DATA
-- Insert data into Users table
INSERT INTO Users (username, hashedpassword, email, role)
VALUES ('john_doe', 'password123', 'john.doe@example.com', 'teammate'),
       ('jane_smith', 'abc456', 'jane.smith@example.com', 'teammate'),
       ('admin', 'adminpass', 'admin@example.com', 'teamlead');

-- Insert data into Tasks table
INSERT INTO Tasks (title, description, created_at, due_date, priority, status, assigned_to)
VALUES ('Task 1', 'Description for Task 1', '2023-07-01', '2023-07-10', 'medium', 'in progress', 1),
       ('Task 2', 'Description for Task 2', '2023-07-02', '2023-07-15', 'high', 'in progress', 2),
       ('Task 3', 'Description for Task 3', '2023-07-03', '2023-07-12', 'low', 'completed', 3);

-- Insert data into Comments table
INSERT INTO Comments (task_id, user_id, timestamp, content)
VALUES (1, 2, '2023-07-05 10:15:00', 'Comment 1 for Task 1'),
       (2, 3, '2023-07-06 09:30:00', 'Comment 1 for Task 2'),
       (3, 1, '2023-07-07 14:45:00', 'Comment 1 for Task 3');

-- Insert data into Notifications table
INSERT INTO Notifications (user_id, timestamp, content)
VALUES (1, '2023-07-05 12:30:00', 'Notification for User 1'),
       (2, '2023-07-06 15:00:00', 'Notification for User 2'),
       (3, '2023-07-07 16:45:00', 'Notification for User 3');

	   --QUERIES

	 --  Retrieve all users:


SELECT * FROM Users;
 -- Retrieve all tasks:

SELECT * FROM Tasks;

-- Retrieve all comments:

SELECT * FROM Comments;

	--Retrieve all notifications:
SELECT * FROM Notifications;
	--Retrieve tasks assigned to a specific user:

SELECT * FROM Tasks WHERE assigned_to = 1;
	--Retrieve comments for a specific task (e.g., task_id = 1):

SELECT * FROM Comments WHERE task_id = 1;
	--Retrieve notifications for a specific user (e.g., user_id = 1):

SELECT * FROM Notifications WHERE user_id = 1;


	--Insert a new user:

INSERT INTO Users (username, hashedpassword, email, role)
VALUES ('new_user', 'newpass123', 'newuser@example.com', 'teammate');

--Update the status of a task:

UPDATE Tasks SET status = 'completed' WHERE task_id = 2;
--Delete a specific comment :

DELETE FROM Comments WHERE comment_id = 3;
--Delete all notifications for a specific user:

DELETE FROM Notifications WHERE user_id = 2;

