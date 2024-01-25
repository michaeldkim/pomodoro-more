import React, { useState } from 'react';
import './Todo.css'

function Todo() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const addTask = () => {
        if (newTask.trim() !== '') {
            setTasks([...tasks, { text: newTask, completed: false }]);
            setNewTask('');
        }
    };

    const removeTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    };

    return (
        <div className='todo-body'>
            <div className='todo-header'>
                <h1>Todo List</h1>
                <div className='todo-addtask'>
                    <button onClick={addTask}>Add Task</button>
                    <input
                        type="text"
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                        placeholder="Add a new task"
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                addTask();
                            }
                        }}
                    />
                </div>
                <div className='todo-divider' />
            </div>
            <div className='todo-tasklist'>
                <ul>
                    {tasks.map((task, index) => (
                        <li key={index}>
                            <span>{task.text}</span>
                            <button onClick={() => removeTask(index)}>X</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Todo;
