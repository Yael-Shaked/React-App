import React, { useState } from 'react';
import { TodoItem } from './Todo2';

interface EditTodoFormProps {
  todo: TodoItem;
  onEdit: (updatedTodo: TodoItem) => void;
  onCancel: () => void;
}

const EditTodoForm: React.FC<EditTodoFormProps> = ({ todo, onEdit, onCancel }) => {
  const [editedTodo, setEditedTodo] = useState(todo);

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedTodo({ ...editedTodo, text: e.target.value });
  };

  const handleSave = () => {
    onEdit(editedTodo);
  };

  return (
    <div>
      <ul>
        <li key={todo.id}>
          <div className='flex mb-4 items-center'>
            <p className="w-full text-grey-darkest">{todo.text} </p>
            <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-blue border-blue hover:text-white hover:bg-blue" onClick={handleSave}>
              Save
            </button>
            <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-grey border-grey hover:text-white hover:bg-grey" onClick={onCancel}>
              Cancel
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default EditTodoForm;
