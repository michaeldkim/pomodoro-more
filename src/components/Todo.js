import React, { useEffect, useState } from 'react';
import './Todo.css'

function Todo() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [dateTime, setDateTime] = useState(new Date());
    const [expandedTaskIndex, setExpandedTaskIndex] = useState(-1);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDateTime(new Date());
        }, 1000);

        // Clear the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, []);

    const formattedDate = dateTime.toLocaleDateString('en-US', {
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
            setTasks([...tasks, { text: newTask, completed: false }]);
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

    return (
        <div className='todo-body'>
            <div className='todo-header'>
                <h1>{formattedDate} {formattedTime}</h1>
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
                                    <button onClick={() => removeTask(index)}>X</button>
                                </div>
                                {expandedTaskIndex === index && (
                                    <div className="expanded-content">
                                        Expanded
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