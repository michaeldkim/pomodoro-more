import React, { useState } from 'react';

function Todo() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const addTask = () => {
        if (newTask.trim() !== '') {
            setTasks([...tasks, { text: newTask, completed: false }]);
            setNewTask('');
        }
    }

    // const toggleCompleted = (index) => {
    //     setTasks((prevTasks) => {
    //         const updatedTasks = [...prevTasks];
    //         updatedTasks[index].completed = !updatedTasks[index].completed;
    //         return updatedTasks;
    //     });
    // };

    const removeTask = (index) => {
        setTasks((prevTasks) => {
            const updatedTasks = [...prevTasks];
            updatedTasks.splice(index, 1);
            return updatedTasks;
        });
    };

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
                        <span>{task.text}</span>
                        <button onClick={() => removeTask(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todo;