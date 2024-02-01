import React, { useState } from 'react';
import './Task.css';

function Task({ taskData, updateTask }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [description, setDescription] = useState(taskData.description || '');
    const [priority, setPriority] = useState(taskData.priority || '');
    const [dueDate, setDueDate] = useState(taskData.dueDate || '');
    const [attachments, setAttachments] = useState(taskData.attachments || []);


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

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (!file) return;

        // Example function to upload a file and return a URL
        uploadFile(file).then((url) => {
            const updatedAttachments = [...attachments, { name: file.name, url }];
            setAttachments(updatedAttachments);
            updateTask({ ...taskData, attachments: updatedAttachments });
        });
    };

    return (
        <div className="task-content">
            <div className='task-description'>
                <div className='row1'>
                    <div>
                        <p>Description:</p>
                        <div className='description-text'>{description || 'N/A'}</div>
                    </div>
                    <button className='modal-button' onClick={openModal}>Edit</button>
                </div>
                <div className='row2'>
                    <div>
                        <p>Attachments:</p>
                        <div>{taskData.attachments && taskData.attachments.length > 0 && (
                            <div className="attachment-indicator">
                                <img src="/logo192.png" alt="Attachments" />
                            </div>
                        )}</div>
                    </div>
                    <div>
                        <p>Due Date: {dueDate || 'N/A'}</p>
                    </div>
                </div>
            </div>
            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <div className='edit-priority'>
                            <h3>Edit Priority: </h3>
                            <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                                {priorityLevels.map((level) => (
                                    <option key={level} value={level}>{level}</option>
                                ))}
                            </select>
                        </div>

                        <div className='edit-description'>
                            <h3>Edit Description: </h3>
                            <textarea
                                className="description-input"
                                placeholder="Add a description..."
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>

                        <div className="task-attachments">
                            <label htmlFor="file-upload" className="file-upload-label">
                                Add Attachment
                            </label>
                            <input
                                id="file-upload"
                                type="file"
                                onChange={handleFileUpload}
                                style={{ display: 'none' }}
                            />
                            {attachments.map((attachment, index) => (
                                <div key={index} className="attachment">
                                    <a href={attachment.url} target="_blank" rel="noopener noreferrer">
                                        {attachment.name}
                                    </a>
                                </div>
                            ))}
                        </div>

                        <div className='edit-date'>
                            <h3>Edit Due Date</h3>
                            <input
                                type="date"
                                value={dueDate}
                                onChange={(e) => setDueDate(e.target.value)}
                            />
                        </div>
                        <button onClick={saveTaskDetails} className="save-button">Save</button>
                        <span onClick={closeModal} className="close-button">&times;</span>
                    </div>
                </div>
            )}
        </div>
    );
}
async function uploadFile(file) {
    // Placeholder for file upload logic
    // In a real application, you would upload the file to a server or cloud storage,
    // then return the URL to the uploaded file
    return 'https://example.com/path/to/file';
}

export default Task;
