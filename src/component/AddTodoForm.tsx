import { type } from 'os';
import React, { useState } from 'react';
import { TodoItem } from './Todo2';  

const AddTodoForm: React.FC = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  
  const handleAddTodo=()=> {
    if (inputValue.trim() === ''){
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 4000);
    } else {
        const newTodo: TodoItem = {
            id: Date.now(),
            text: inputValue,
            details: '',
          };
    setTodos([...todos, newTodo]);
    setInputValue('');
  }
  }
  const handleKeyPress = (e: { key: string; }) => {
    if (e.key === 'Enter') {
      handleAddTodo();
    }
    
};
const handleDeleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

return (
    <><div className="flex mt-4">
        <input
            className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Add Todo" />
        <button
            className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal"
            onClick={handleAddTodo}>
            Add Todo
        </button>
    </div><ul>
            {todos.map((todo) => (
                <li key={todo.id}>
                    <div className='flex mb-4 items-center'>
                        <p className="w-full text-grey-darkest">{todo.text} </p>
                        <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red" onClick={() => handleDeleteTodo(todo.id)}>
                         Remove
                        </button>
                        
                      
                    </div>
                </li>
            ))}
        </ul></>

);
};
export default AddTodoForm;
