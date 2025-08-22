function Form ({ task, setTask, handleSubmit }){
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="task-input"
        value={task}
        placeholder="Enter new task"
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit" className="add-btn">
        Add
      </button>
    </form>
  );
};

export default Form;
