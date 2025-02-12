import { useEffect, useState } from "react";
import { getTodos, addTodo, updateTodo, deleteTodo } from "./api";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
    const [todos, setTodos] = useState([]);
    const [text, setText] = useState("");

    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        const { data } = await getTodos();
        setTodos(data);
    };

    const handleAddTodo = async () => {
        if (text !== "") {
            await addTodo(text);
            fetchTodos();
            setText("");
            document.getElementById('task').style.borderColor = "";
        }
        else {
            document.getElementById('task').style.borderColor = "#ff000d";
        }
    };

    const handleToggleComplete = async (id, completed) => {
        await updateTodo(id, { completed: !completed });
        fetchTodos();
    };

    const handleDeleteTodo = async (id) => {
        await deleteTodo(id);
        fetchTodos();
    };

    return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-md">
        
        <h1 className="text-2xl font-bold mb-4 flex items-center justify-center">To-Do App</h1>
        
        <TodoForm text={text} setText={setText} handleAddTodo={handleAddTodo} />

        <hr className="h-1 rounded-xl bg-[#DB424A] mx-1 my-4" />

        <TodoList todos={todos} handleToggleComplete={handleToggleComplete} handleDeleteTodo={handleDeleteTodo} />

    </div>
    );
}

export default App;
