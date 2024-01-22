import React, { useState } from "react";
import AddTodoForm from "./AddTodoForm";
import RemoveTodoButton from "./RemoveTodoForm";
import EditTodoForm from "./EditTodoForm";
import EditPopup from "./EditPopup";

export type TodoItem = {
  id: number;
  text: string;
  details: string;
};
const Todo = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [selectedTodo, setSelectedTodo] = useState<TodoItem | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const onAddTodo = (TodoItem: TodoItem) => {
    setTodos([...todos, TodoItem]);
  };
  const handleDeleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const handleEditTodo = (editedTodo: TodoItem) => {
    setTodos((prevTodos) =>
      prevTodos.map((t) => (t.id === editedTodo.id ? editedTodo : t))
    );
    console.log("After update:", todos);

    setIsPopupOpen(false);
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
          <h1 className="text-grey-darkest">Todo List</h1>
          <AddTodoForm onAdd={onAddTodo} />
        </div>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <div className="flex mb-4 items-center">
                <p className="w-full text-grey-darkest">{todo.text} </p>
                <RemoveTodoButton onRemove={(e) => handleDeleteTodo(todo.id)} />
                <button
                  className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal"
                  onClick={() => {
                    handleEditTodoItem(todo);
                  }}
                >
                  Edit
                </button>
              </div>
            </li>
          ))}
        </ul>
        {isPopupOpen && selectedTodo && (
          <EditPopup
            onClose={() => {
              setIsPopupOpen(false);
              setSelectedTodo(null);
            }}
            onSave={() => handleEditTodo(selectedTodo)}
          >
            <EditTodoForm
              todo={selectedTodo}
              onEdit={handleEditTodo}
              onCancel={() => {
                setIsPopupOpen(false);
                setSelectedTodo(null);
              }}
            />
          </EditPopup>
        )}
      </div>
    </div>
  );
};
export default Todo;
