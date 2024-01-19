import React, { useState } from 'react';

function Todo() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const addTask = () => {
        if (newTask.trim() !== '') {
            setTasks([...tasks, {text: newTask, completed: false}]);
            setNewTask('');
        }
    }

    const toggleCompleted = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].completed = !updatedTasks[index].completed;
        setTasks(updatedTasks);
    }

    return (
      <div className="container mx-auto p-4">
        <h1>Todo List</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={addTask}>Add Task</button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index} className={task.completed ? 'completed' : ''}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleCompleted(index)}
            />
            <label>{task.text}</label>
          </li>
        ))}
      </ul>
      </div>
    );
  }
  
  export default Todo;