import React, { useState } from 'react';
import { TodoItem } from './Todo2';  

interface EditTodoFormProps {
  todo: TodoItem;
  onEdit: (editedTodo: TodoItem) => void;
  onCancel: () => void;
}

const EditTodoForm: React.FC<EditTodoFormProps> = ({ todo, onEdit, onCancel }) => {
  const [editedText, setEditedText] = useState(todo.text);
  const [editedDetails, setEditedDetails] = useState(todo.details);

  const handleSave = () => {
    const editedTodo: TodoItem = {
      ...todo,
      text: editedText,
      details: editedDetails,
    };
    onEdit(editedTodo);
  };

  return (
    <div>
      <input
        type="text"
        value={editedText}
        onChange={(e) => setEditedText(e.target.value)}
      />
      <textarea
        value={editedDetails}
        onChange={(e) => setEditedDetails(e.target.value)}
      />
    </div>
  );
};

export default EditTodoForm;
