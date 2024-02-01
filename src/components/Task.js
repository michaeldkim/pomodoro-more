import React, { useState } from 'react';
import './Task.css';

function Task({ taskData }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [description, setDescription] = useState(taskData.description || '');
    const [priority, setPriority] = useState(taskData.priority || '');

    const priorityLevels = ["Low", "Medium", "High"];

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const saveDescription = () => {
        // Save the description to the taskData (you can update your taskData handling logic here)
        taskData.description = description;
        taskData.priority = priority;
        // Close the modal
        closeModal();
    };

    return (
        <div className="task-content">
            <div className='task-description'>
                <p>Description:</p>
                <div className='description-text'>{taskData.description || 'No description'}</div>
            </div>
            <button className='modal-button' onClick={openModal}>Edit</button>
            {/* Modal */}
            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <h3>Edir Priority</h3>
                        <select
                            value={priority}
                            onChange={(e) => setPriority(e.target.value)}
                        >
                            {priorityLevels.map((level) => (
                                <option key={level} value={level}>
                                    {level}
                                </option>
                            ))}
                        </select>
                        <h3>Edit Description</h3>
                        <span onClick={closeModal} className="close-button">
                            &times;
                        </span>
                        <textarea
                            className="description-input"
                            placeholder="Add a description..."
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <button onClick={saveDescription} className="save-button">Save</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Task;
