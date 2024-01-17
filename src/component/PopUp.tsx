// PopupComponent.js
import React from 'react';

const Popup = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md">
        <p className="text-lg">This is your popup content!</p>
        <button
          className="mt-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;
