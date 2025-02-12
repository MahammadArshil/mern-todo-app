
const TodoForm = ({text, setText, handleAddTodo}) => {
    return (
        <>
            <div className="flex flex-col">
                <input type="text" id="task"
                    placeholder="Add a task..."
                    className="border p-2 w-full rounded-md"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <button className="bg-blue-500 text-white p-2 mt-3 w-full rounded-lg" onClick={handleAddTodo}>
                    Add
                </button>
            </div>
        </>
    );
}

export default TodoForm;
