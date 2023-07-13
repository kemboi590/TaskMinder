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
  