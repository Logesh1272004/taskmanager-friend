import React, { useState } from 'react';
import TaskList from './TaskList.js';
import TaskForm from './TaskForm';
import { Header, Footer } from './Layout';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: '1', content: 'Learn React', priority: 'High', status: 'In Progress' },
    { id: '2', content: 'Build a Task Manager', priority: 'Medium', status: 'In Progress' },
  ]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const updateTaskStatus = (id, status) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, status } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <>
      <Header />
      <div className="container">
        <TaskForm addTask={addTask} />
        <TaskList tasks={tasks} deleteTask={deleteTask} updateTaskStatus={updateTaskStatus} />
      </div>
      <Footer />
    </>
  );
};

export default App;
