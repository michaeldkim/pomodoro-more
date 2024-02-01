import React, { useEffect, useState } from 'react';
import './Todo.css';
import Task from './Task';

function Todo() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [dateTime, setDateTime] = useState(new Date());
    const [expandedTaskIndex, setExpandedTaskIndex] = useState(-1);
    const [priority, setPriority] = useState('Medium');

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDateTime(new Date());
        }, 1000);

        // Clear the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, []);

    const formattedDate = dateTime.toLocaleDateString('en-US', {
        weekday: 'long',
        month: '2-digit',
        day: '2-digit',
    });

    const formattedTime = dateTime.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
    });

    const addTask = () => {
        if (newTask.trim() !== '') {
            const capitalizedTask = newTask.charAt(0).toUpperCase() + newTask.slice(1);
            setTasks([...tasks, { text: capitalizedTask, completed: false, priority }]);
            setNewTask('');
        }
    };

    const removeTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    };

    const toggleCompleted = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].completed = !updatedTasks[index].completed;
        setTasks(updatedTasks);
    };

    const toggleExpandTask = (index) => {
        setExpandedTaskIndex(index === expandedTaskIndex ? -1 : index);
    };

    // Calculate the number of tasks and completed tasks
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter((task) => task.completed).length;

    return (
        <div className='todo-body'>
            <div className='todo-header'>
                <h1>{formattedDate} {formattedTime}</h1>
                <div className='task-count'>
                    <p>Total Tasks: {totalTasks}</p>
                    <p>Completed Tasks: {completedTasks}</p>
                </div>
                <div className='todo-addtask'>
                    <button onClick={addTask}>+</button>
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
                    <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>
                </div>
                <div className='todo-divider' />
                <div className='todo-tasklist'>
                    <ul>
                        {tasks.map((task, index) => (
                            <li key={index} className={task.completed ? 'completed' : ''}>
                                <div className='todo-task-head'>
                                    <input
                                        type="checkbox"
                                        checked={task.completed}
                                        onChange={() => toggleCompleted(index)}
                                    />
                                    <span onClick={() => toggleExpandTask(index)}>{task.text}</span>
                                    <span className='task-priority'>{task.priority}</span>
                                    <button onClick={() => removeTask(index)}>X</button>
                                </div>
                                {expandedTaskIndex === index && (
                                    <div className="expanded-content">
                                        <Task taskData={task} />
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Todo;