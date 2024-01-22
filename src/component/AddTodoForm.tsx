import { type } from 'os';
import React, { useState } from 'react';
import { TodoItem } from './Todo2';  

interface AddTodoFormProps {
  onAdd: (todo: TodoItem) => void;
}

const AddTodoForm: React.FC<AddTodoFormProps> = ({ onAdd }) => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleAddTodo = () => {
    const newTodo: TodoItem = {
      id: Date.now(),
      text: inputValue,
      details: "",
    };
    setInputValue("");
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
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="buy milk"
        />
        <button
          className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal"
          onClick={handleAddTodo}>
          Add Todo
        </button>
      </div>
    </>
  );
};
export default AddTodoForm;





// <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red" onClick={() => handleDeleteTodo(todo.id)}>
//                          Remove
//                         </button>
                        