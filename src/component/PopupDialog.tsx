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
        <div className=" mt-4 flex items-center justify-center ">
          <button
            className="  px-6 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-200 mr-5"
            onClick={onSave}>
            Approval
          </button>
          <button
            className=" px-6 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-200"
            onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export {  PopupDialog } 