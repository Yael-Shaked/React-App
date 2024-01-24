import { title } from 'process';
import React from 'react';

interface PopupDialogProps {
  onClose: () => void;
  onSave: () => void;
  children: React.ReactNode;
}

const PopupDialog: React.FC<PopupDialogProps> = ({ onClose, onSave, children }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-gray-800 opacity-50"></div>
      <div className="z-10 bg-white p-8 rounded shadow-md">

        {children}
        <div className="mt-4 flex justify-end">
          <button
            className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 mr-2"
            onClick={onSave}>
            Approval
          </button>
          <button
            className="px-6 py-2 bg-gray-500 text-white rounded hover:bg-gray-700"
            onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export {  PopupDialog } 