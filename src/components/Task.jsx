
function Task({ task, toggleComplete, deleteTask }){
  return (
    <li className="task-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleComplete(task.id)}
      />
      <span className={task.completed ? "completed" : ""}>{task.text}</span>
      <button className="delete-btn" onClick={() => deleteTask(task.id)}>
        x
      </button>
    </li>
  );
};

export default Task;
