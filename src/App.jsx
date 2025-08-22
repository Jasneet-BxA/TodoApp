import { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import Header from './components/Header';
import Task from './components/Task';

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === '') return;

    const newTask = {
      id: Date.now(),
      text: task.trim(),
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTask('');
  };

  const toggleComplete = (id) => {
    const updated = tasks.map((t) =>
      t.id === id ? { ...t, completed: !t.completed } : t
    );
    setTasks(updated);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <div className="todo-container">
      <Header />
      <Form task={task} setTask={setTask} handleSubmit={handleSubmit} />
      <ul className="task-list">
        <h3 className='task-heading'>Tasks</h3>
        
        {tasks.length ? tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            toggleComplete={toggleComplete}
            deleteTask={deleteTask}
          />
        )) : <p style={{fontSize: '15px'}}>No Tasks</p>}
      </ul>
    </div>
  );
}

export default App;
