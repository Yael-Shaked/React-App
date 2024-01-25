import React, { useState } from "react";
import AddTodoForm from "./AddTodoForm";
import RemoveTodoButton from "./RemoveTodoForm";
import EditTodoForm from "./EditTodoForm";
import { TodoItem } from "../interfaces/TodoItem";
import { PopupDialog } from "./PopupDialog";

const Todo = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [selectedTodo, setSelectedTodo] = useState<TodoItem | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const onAddTodo = (TodoItem: TodoItem) => {
    setTodos([ TodoItem,...todos]);
  };
  const handleDeleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  
  const handleSaveChanges = (editedTodo: TodoItem) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === editedTodo.id ? editedTodo : todo
    );
    setTodos(updatedTodos);
    setSelectedTodo(null);
  };
  
  const handleEditTodoItem = (item: TodoItem) => {
    setIsPopupOpen(true);
    setSelectedTodo(item);
  };

  return (
    <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
      <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
        <div className="mb-4">
          <h1 className="text-grey-darkest text-40px">Todo List</h1>
          <AddTodoForm onAdd={onAddTodo} />
        </div>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id} className="mb-4"> 
            <div className="flex items-centermt mt-2 justify-between">
            <p className="text-grey-darkest flex-1">{todo.title}</p>
           
                <RemoveTodoButton onRemove={() => handleDeleteTodo(todo.id)} />
                <button
       className=" flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-gray hover:bg-gray-100 hover:brightness-100 transition duration-1000"
       onClick={() =>{handleEditTodoItem(todo);}}>
                  Edit
                </button>
              </div>
              <div>
              <p className="text-grey-darkest">{todo.description}</p>
              </div>

            </li>
          ))}
        </ul>
        {isPopupOpen && selectedTodo && (
          <PopupDialog
            onClose={() => {
              setIsPopupOpen(false);
              setSelectedTodo(null);
            }}
            onSave={() => handleSaveChanges(selectedTodo)
            }
          >
            <EditTodoForm
              todo={selectedTodo}
              onEdit={handleEditTodoItem}
          />
          </PopupDialog>
        )}
      </div>
    </div>
  );
};
export default Todo;
