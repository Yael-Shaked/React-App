import { type } from 'os';
import React, { useState } from 'react';
import { TodoItem } from '../interfaces/TodoItem';
import { v4 as uuidv4 } from 'uuid';
import 'tailwindcss/tailwind.css';

interface AddTodoFormProps {
  onAdd: (todo: TodoItem) => void;
}

const AddTodoForm: React.FC<AddTodoFormProps> = ({ onAdd }) => {
  const [taskInput, setTaskInput] = useState('');

  const handleAddTodo = () => {
    const [title, description] = taskInput.split('|').map((item) => item.trim());

    const newTodo: TodoItem = {
      id: uuidv4().toString(),
      title: title,
      description: description,
    };
    setTaskInput('');
    onAdd(newTodo);
  }
  const handleKeyPress = (e: { key: string; }) => {
    if (e.key === 'Enter') {
      handleAddTodo();
    }
};
return (
  <>
      <div className="flex mt-4">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="buy milk | 3%"
        />
        <button
       
       className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-gray hover:bg-gray-100 hover:brightness-100 transition duration-1000"
       onClick={handleAddTodo}>
          Add Todo
        </button>
      </div>
    </>
  );
};
export default AddTodoForm;
                     