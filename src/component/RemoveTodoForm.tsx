import React, { useState } from 'react';
import { TodoItem } from './Todo2';  

interface RemoveTodoButtonProps {
    onRemove: React.MouseEventHandler<HTMLButtonElement>;
  }
  
  const RemoveTodoButton: React.FC<RemoveTodoButtonProps> = ({ onRemove }) => {
    return (
      <button onClick={onRemove} className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red">
        Remove
      </button>
    );
  };
  
  export default RemoveTodoButton;