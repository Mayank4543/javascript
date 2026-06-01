import { useState, useEffect } from "react";

type todo = {
    id: number,
    text: string,
    completed: boolean,
}
const App = () => {
    const [todos, setTodo] = useState<todo[]>(() => {
        const storedTodos = localStorage.getItem("todos");
        if (storedTodos) {
            return JSON.parse(storedTodos);
        }
        return storedTodos ? JSON.parse(storedTodos) : [];

    })
    const [sortTodo, setSortTodo] = useState('asc');

    const [input, setInput] = useState("");
    const [error, setError] = useState("");
    const [editText, setEditText] = useState<number | null>(null);
    const [search, setSearch] = useState<string>("");
    const [filter, setFilter] = useState<string>("all");
    const handleTodos = () => {
        if (input.trim() === "") {
            setError("Please enter a valid todo");
            return;
        }
        if (editText !== null) {
            const updatedTodos = todos.map((todo) =>
                todo.id === editText ? { ...todo, text: input } : todo
            );
            console.log("updated todo", updatedTodos);

            setTodo(updatedTodos);
            setEditText(null);
        } else {
            setTodo([...todos, { id: Date.now(), text: input, completed: false }]);
        }


        setInput("");
        setError("");
    };

    const handleDelete = (id: number) => {
        if (todos.length === 0) {
            setError("No todos to delete");
            return;
        }
        const updateTodos = todos.filter((todo) => todo.id !== id)

        setTodo(updateTodos);
        setError("");
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
    let sortedTodos = [...filteredTodos];

    if (sortTodo === 'asc') {
        sortedTodos.sort((a, b) => a.text.localeCompare(b.text));
    } else if (sortTodo === 'desc') {
        sortedTodos.sort((a, b) => b.text.localeCompare(a.text));
    }
    let filteredByStatusTodos = [...sortedTodos];
    if (filter === "completed") {
        filteredByStatusTodos = sortedTodos.filter((todo) => todo.completed);
    }
    else if (filter === "incomplete") {
        filteredByStatusTodos = sortedTodos.filter((todo) => !todo.completed);
    }

    const toggleComplete = (id: number) => {
        setTodo(
            todos.map(todo =>
                todo.id === id
                    ? { ...todo, completed: !todo.completed }
                    : todo
            )
        );
    };
    useEffect(() => {
        console.log("save todos", todos);
        localStorage.setItem("todos", JSON.stringify(todos));

    }, [todos])



    return (

        <div className="min-h-screen   flex  items-center justify-center bg-linear-to-br from-purple-50  to-purple-100 pt-10 bg-gray-100">
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
                        <button onClick={() => setSortTodo("asc")} className="bg-blue-500 text-white px-6 py-4 rounded-xl  hover:bg-blue-600">
                            A-Z
                        </button>

                        <button onClick={() => setSortTodo("desc")} className="bg-blue-500 text-white px-6 py-4 rounded-xl  hover:bg-blue-600">
                            Z-A
                        </button>
                        <button onClick={() => setFilter("all")} className="bg-blue-500 text-white px-6 py-4 rounded-xl  hover:bg-blue-600">
                            All
                        </button>
                        <button onClick={() => setFilter("completed")} className="bg-blue-500 text-white px-6 py-4 rounded-xl  hover:bg-blue-600">
                            Completed
                        </button>
                        <button onClick={() => setFilter("incomplete")} className="bg-blue-500 text-white px-6 py-4 rounded-xl  hover:bg-blue-600">
                            Incomplete
                        </button>


                    </div>
                </div>

                {filteredByStatusTodos.map((todo) => (
                    <div key={todo.id} className="space-y-2">


                        <div

                            className="border flex justify-between items-center rounded-xl px-6 py-3 bg-gray-50"
                        >

                            <p className="">{todo.text}</p>
                            <div className="gap-2">
                                <button onClick={() => handleEdit(todo.id)} className=" bg-green-500 text-white px-4 py-4 rounded-xl hover:bg-green-600" >Edit</button>
                                <button onClick={() => handleDelete(todo.id)} className="bg-red-500 text-white px-4 py-4 rounded-xl hover:bg-red-600"> Delete</button>
                                <button
                                    onClick={() => toggleComplete(todo.id)}
                                >
                                    {todo.completed ? "Undo" : "Complete"}
                                </button>
                            </div>

                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default App;