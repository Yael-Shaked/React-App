import React, { useState } from 'react';
import { TodoItem } from '../interfaces/TodoItem';
import { PopupDialog } from "./PopupDialog";

interface RemoveTodoButtonProps {
  onRemove: () => void; }

  const RemoveTodoButton: React.FC<RemoveTodoButtonProps> = ({ onRemove }) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleRemove = () => {
    setIsPopupOpen(true);
  };
  const handleConfirmRemove = () => {
    onRemove();
    setIsPopupOpen(false);
  };
  const handleCancelRemove = () => {
    setIsPopupOpen(false);
  };
   return (
    <>
      <button
        onClick={handleRemove}
        className="mr-2 flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-gray hover:bg-gray-100 hover:brightness-100 transition duration-1000">
        Remove
      </button>
      {isPopupOpen && (
        <PopupDialog 
        onClose={handleCancelRemove}
        onSave={handleConfirmRemove}>
          <div>
            <p>Are you sure you want to remove this todo?</p>
          </div>
        </PopupDialog>
      )}
    </>
  );
};
export default RemoveTodoButton;