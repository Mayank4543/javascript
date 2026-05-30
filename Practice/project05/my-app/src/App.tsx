import { useState } from "react";
type todo = {
    id: number,
    text: string
}
const App = () => {
    const [todos, setTodo] = useState<todo[]>([]);
    const [input, setInput] = useState("");
    const [error, setError] = useState("");
    const [editText, setEditText] = useState<number | null>(null);
    const [search, setSearch] = useState<string>("");
    const handleTodos = () => {
        if (input.trim() === "") {
            setError("Please enter a valid todo");
            return;
        }
        if (editText !== null) {
            const updatedTodos = todos.map((todo, index) =>
                index === editText ? { ...todo, text: input } : todo
            );
            console.log("updated todo", updatedTodos);

            setTodo(updatedTodos);
            setEditText(null);
        } else {
            setTodo([...todos, { id: Date.now(), text: input }]);
        }


        setInput("");
        setError("");
    };

    const handleDelete = (id: number) => {
        if (todos.length === 0) {
            setError("No todos to delete");
            return;
        }
        const updateTodos = todos.filter((_, currentIndex) => {
            if (id != currentIndex) return true
            else return false;
        })

        setTodo(updateTodos);
        // setError("");
    };
    const handleEdit = (id: number) => {
        const selectTodo = todos.find((todo) => todo.id === id)
        setInput(selectTodo?.text || "");
        setEditText(id);

    }
    const handleSearch = (value: string) => {

        setSearch(value)

    }
    const filteredTodos = todos.filter((todo) =>
        todo.text.toLowerCase().includes(search.toLowerCase())
    );
    console.log("Original Todos:", todos);
    console.log("Filtered Todos:", filteredTodos);



    return (

        <div className="min-h-screen flex  items-center justify-center bg-linear-to-br from-purple-50  to-purple-100 pt-10 bg-gray-100">
            <div className="bg-white shadow-2xl rounded-2xl p-6 w-full max-w-lg">
                <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">
                    Todo App
                </h1>
                <div className="flex flex-col  items-center gap-2 mb-4">
                    <input
                        type="search"
                        value={search}
                        onChange={(e) => handleSearch(e.target.value)}
                        placeholder="Search todos..."
                        className="w-full border border-gray-200 rounded-xl px-6 py-3 mb-4"
                    />
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Enter a todo..."
                        className="w-full border border-gray-200 rounded-xl px-6 py-3 mb-4"
                    />
                    {error && (
                        <p className="text-red-500  mb-3 text-xl">
                            {error}
                        </p>
                    )}

                    <div className="flex w-full justify-end gap-2">

                        <button
                            onClick={handleTodos}
                            className="bg-blue-500 text-white px-6 py-4 rounded-xl  hover:bg-blue-600"
                        >
                            {editText !== null ? 'Save as' : 'Add Todo'}
                        </button>



                    </div>
                </div>

                {filteredTodos.map((todo) => (
                    <div key={todo.id} className="space-y-2">


                        <div

                            className="border flex justify-end rounded-xl px-6 py-3 bg-gray-50"
                        >

                            <p className="">{todo.text}</p>
                            <div className="gap-2">
                                <button onClick={() => handleEdit(todo.id)} className=" bg-green-500 text-white px-4 py-4 rounded-xl hover:bg-green-600" >Edit</button>
                                <button onClick={() => handleDelete(todo.id)} className="bg-red-500 text-white px-4 py-4 rounded-xl hover:bg-red-600"> Delete</button>
                            </div>

                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default App;