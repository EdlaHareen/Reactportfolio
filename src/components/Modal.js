// Modal.js
import React from 'react';

// Modal.js
import ReactModal from 'react-modal';

const Modal = ({ isOpen, onRequestClose, item, resumeData }) => {
  // Check if 'item' is truthy before trying to access its properties
  if (!item) {
    return null; // or return some default content or loading indicator
  }

  const { name, detailedDescription } = item;

  // Assuming title and content are properties in the resumeData corresponding to the selected item
  const title = resumeData.titles[item.titleId]; // Adjust the property name as needed
  const content = resumeData.contents[item.contentId]; // Adjust the property name as needed

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Modal"
      ariaHideApp={false}
    >
      <div className="modal-content">
        <h2>{title}</h2>
        <p>{detailedDescription}</p>
        <p>{content}</p>
        {/* Add any other information you want to display */}
        <button onClick={onRequestClose}>Close Modal</button>
      </div>
    </ReactModal>
  );
};

export default Modal;
