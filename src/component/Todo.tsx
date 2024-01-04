import React, { useState } from 'react';
import './Todo.css';
import { FaTrash } from 'react-icons/fa';
import { FaSave} from 'react-icons/fa';
import { FaSearch} from 'react-icons/fa';

type TodoItem = {
  id: number;
  text: string;
  details: string;
};
const Todo=()=> {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [editingTodo, setEditingTodo] = useState<number | null>(null);
  const [detailInputValue, setDetailInputValue] = useState('');
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchVisible, setSearchVisible] = useState(false);

  const handleAddTodo=()=> {
    if (inputValue.trim() === ''){
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 4000);
    } else {
    const newTodo = {
      id: Date.now(),
      text: inputValue,
      details: ''
    };
    setTodos([...todos, newTodo]);
    setInputValue('');
  }
  }
  const startEditing=(todoId: number, currentDetails: string)=> {
    setEditingTodo(todoId);
    setDetailInputValue(currentDetails);
    setDetailsOpen(true);
  }
  const handleDetailInputChange=(e: React.ChangeEvent<HTMLInputElement>)=> {
    setDetailInputValue(e.target.value);
  }
  const handleDeleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }
  const saveDetails = (todoId: number, e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    const updatedTodos = todos.map(todo => {
      if (todo.id === todoId) {
        return { ...todo, details: detailInputValue };
      }
      return todo;
    });
  setTodos(updatedTodos);
  setEditingTodo(null); 
  setDetailInputValue('');
  }
  
 const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  const filteredTodos = todos.filter((todo) =>
  todo.text.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const toggleSearchInput = () => {
    setSearchVisible((prevSearchVisible) => !prevSearchVisible);
  };
  return (
    <div className="todo-container">
        <div className="search-icon" onClick={toggleSearchInput}>
        <FaSearch />
        <i className="fa-search"></i>
      </div>
      {searchVisible && (
      <input
        type="text"
        placeholder="Search todo"
        value={searchQuery}
        onChange={handleSearch}
        className="todo-search-todo"
        />
        )}
        {searchQuery && filteredTodos.length === 0 && (
          <div>No todos match your search.</div>
        )}
     {showPopup && (
        <div className="popup">
          No todo
        </div>
      )}
      <h1 className="todo-header">Todo List</h1>
      <div className="todo-input-container">
        <input
          className="todo-input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new todo"
        />
        <button className="todo-add-button" onClick={handleAddTodo}>Add Todo</button>
      </div>
      <ul>
      {filteredTodos.map((todo) => (
          <li key={todo.id}>
            <div className='todo-list-value' onClick={() => startEditing(todo.id, todo.details)}>
              {editingTodo === todo.id ? (
                <div>
                  <textarea
                    value={detailInputValue}
                    onChange={(e) => setDetailInputValue(e.target.value)}
                    placeholder="Add details"
                    className='todo-add-details'
                  />
                  <button className="todo-save-button" onClick={(e) => saveDetails(todo.id, e)}>
                    <FaSave />
                  </button>
                </div>
              ) : (
                <span>{todo.text}</span>
              )}
            </div>
            <button className="todo-delete-button" onClick={() => handleDeleteTodo(todo.id)}>
              <FaTrash />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
 };
export default Todo;

