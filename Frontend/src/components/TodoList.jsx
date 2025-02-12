import { FaCheck, FaTrash } from "react-icons/fa";

const TodoList = ({todos, handleDeleteTodo, handleToggleComplete}) => {
  return (
    <>
      <ul className="mt-4">
            {todos.map((todo) => (
                <li key={todo._id} className={`flex justify-between p-2 ${todo.completed ? "line-through text-gray-500" : ""}`}>
                    {todo.text}
                    <div className="space-x-2">
                        <button onClick={() => handleToggleComplete(todo._id, todo.completed)}>
                            <FaCheck className="text-green-500" />
                        </button>
                        <button onClick={() => handleDeleteTodo(todo._id)}>
                            <FaTrash className="text-red-500" />
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    </>
  );
}

export default TodoList;
