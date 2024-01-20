// Todo.js
import React, { useState } from 'react';
import Timer from './Timer';

function Todo() {
    const [tasks, setTasks] = useState([]);
    const [completedTasks, setCompletedTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const addTask = () => {
        if (newTask.trim() !== '') {
            setTasks([...tasks, { text: newTask, completed: false }]);
            setNewTask('');
        }
    };

    const removeTask = (index) => {
        const completedTask = {
            ...tasks[index],
            completed: true,
        };

        setCompletedTasks((prevCompletedTasks) => [...prevCompletedTasks, completedTask]);

        setTasks((prevTasks) => {
            const updatedTasks = [...prevTasks];
            updatedTasks.splice(index, 1);
            return updatedTasks;
        });
    };

    return (
        <div className="container mx-auto p-4">
            <div className='container'>
                <h1 className='pb-4'>Todo List</h1>
                <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="Add a new task"
                />
                <button onClick={addTask}>Add Task</button>

                <div className='pb-4'>
                    {tasks.map((task, index) => (
                        <div
                            key={index}
                            className={`flex space-x-4 justify-between py-2 ${task.completed ? 'text-gray-500 line-through' : 'text-black'
                                }`}
                            style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
                        >
                            <span>{task.text}</span>
                            <Timer />
                            <button onClick={() => removeTask(index)}>Remove</button>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <h2>Completed Tasks</h2>
                <ul>
                    {completedTasks.map((completedTask, index) => (
                        <li key={index}>
                            <span>{completedTask.text}</span>
                            {/* You can include other details or components here if needed */}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Todo;
