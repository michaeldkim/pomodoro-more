import React, { useState } from 'react';
import './Task.css';

function Task({ taskData, updateTask }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [description, setDescription] = useState(taskData.description || '');
    const [priority, setPriority] = useState(taskData.priority || '');
    const [dueDate, setDueDate] = useState(taskData.dueDate || '');

    const priorityLevels = ["Low", "Medium", "High"];

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const saveTaskDetails = () => {
        // Update taskData with new values
        const updatedTask = {
            ...taskData,
            description,
            priority,
            dueDate, // Include the updated due date
        };
        updateTask(updatedTask); // Call a function passed from the parent to update the task list
        closeModal();
    };

    return (
        <div className="task-content">
            <button className='modal-button' onClick={openModal}>Edit</button>
            <div className='task-description'>
                <p>Description:</p>
                <div className='description-text'>{description || 'N/A'}</div>
                <p>Due Date:</p>
                <div>{dueDate || 'N/A'}</div>
            </div>
            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <h3>Edit Priority</h3>
                        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                            {priorityLevels.map((level) => (
                                <option key={level} value={level}>{level}</option>
                            ))}
                        </select>

                        <h3>Edit Description</h3>
                        <textarea
                            className="description-input"
                            placeholder="Add a description..."
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />

                        <h3>Edit Due Date</h3>
                        <input
                            type="date"
                            value={dueDate}
                            onChange={(e) => setDueDate(e.target.value)}
                        />

                        <button onClick={saveTaskDetails} className="save-button">Save</button>
                        <span onClick={closeModal} className="close-button">&times;</span>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Task;
