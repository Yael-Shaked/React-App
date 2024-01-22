import React, { useState } from "react";
import { TodoItem } from "../interfaces/TodoItem";

interface EditTodoFormProps {
  todo: TodoItem;
  onEdit: (editedTodo: TodoItem) => void;  
}

const EditTodoForm: React.FC<EditTodoFormProps> = ({
  todo,
  onEdit,  
}) => {

  const [todoItem, setTodoItem] = useState(todo);

  const handleUpdateTitle = (title: string) => {

    // update todo item 
    // call onEdit

    onEdit(todoItem);

  }

  const handleUpdateDescription = (description: string) => {

    onEdit(todoItem);
  } 

  return (
    <div className="flex flex-col">
      <div className=" text-xl mb-4">
        edit todo
      </div>
      <div className="mb-2 text-sm">title</div>
      <input
        type="text"
        className=" bg-slate-200 p-2 rounded-xl mb-2 text-gray-500 "
        value={todoItem.title}
        onChange={(e) => handleUpdateTitle(e.target.value)}
      />
      <div className="mb-2 text-sm">description</div>
      <textarea
        value={todoItem.description}
        className=" bg-slate-200 p-2 rounded-xl mb-2 "
        onChange={(e) => handleUpdateDescription(e.target.value)}
      />
    </div>
  );
};

export default EditTodoForm;
