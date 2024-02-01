import React, { useState } from 'react';
import './Task.css';

function Task({ taskData }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="task-content">
            <button className='modal-button' onClick={openModal}>Edit</button>
            {/* Modal */}
            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <h3>Modal Content</h3>
                        <span onClick={closeModal} className="close-button">
                            &times;
                        </span>
                        
                        {/* Add your modal content here */}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Task;