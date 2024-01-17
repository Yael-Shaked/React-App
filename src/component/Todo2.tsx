import React, { useState } from 'react';
import './Todo.css';
import AddTodoForm from './AddTodoForm';
import EditTodoForm from './EditTodoForm';

export type TodoItem = {
  id: number;
  text: string;
  details: string;
};

const Todo = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [selectedTodo, setSelectedTodo] = useState<TodoItem | null>(null);
  const [detailsOpen, setDetailsOpen] = useState(false);

  const startEditing = (todo: TodoItem) => {
    setSelectedTodo(todo);
    setDetailsOpen(true);
  };


  const handleEdit = (updatedTodo: TodoItem) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === updatedTodo.id ? updatedTodo : todo
    );
    setTodos(updatedTodos);
    setDetailsOpen(false);
    setSelectedTodo(null);
  };

  return (
    <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
    <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
      <div className="mb-4">
        <h1 className="text-grey-darkest">Todo List</h1>
        <AddTodoForm />
      </div>

     

        {detailsOpen && selectedTodo && (
          <EditTodoForm
            todo={selectedTodo}
            onEdit={handleEdit}
            onCancel={() => {
              setDetailsOpen(false);
              setSelectedTodo(null);
            }}
          />
        )}
      </div>
      </div>

  );
};


export default Todo;
