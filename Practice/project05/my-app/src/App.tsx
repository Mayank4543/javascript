import { useState } from 'react';

type ExpenseTracker = {
    id: number,
    name: string,
    amount: number,
    category: string,
    date: string
}

const App = () => {
    const [expense, setExpense] = useState<ExpenseTracker[]>([]);
    const [form, setform] = useState({
        name: "",
        amount: "",
        category: "",
        date: ""
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { name, value } = e.target;
        setform((prev) => ({
            ...prev,
            [name]: value,
        }))
    }
    const addExpense = () => {
        if (!form.name.trim() || !form.amount || !form.category || !form.date) return;
        const newExense: ExpenseTracker = {
            id: Date.now(),
            name: form.name,
            amount: Number(form.amount),
            category: form.category,
            date: form.date

        }
        setExpense((prev) => [...prev, newExense]);
        setform({
            name: "",
            amount: "",
            category: "",
            date: ""
        });
    }
    const handledelteTracker = (id: number) => {
        if (expense.length === 0) return 'No Expense found';
        const deleteexpense = expense.filter((item) => item.id != id);
        setExpense(deleteexpense);
    }
    return (
        <>

            <div className='flex items-center justify-center min-h-screen flex-col '>
                <button onClick={addExpense} className='px-5 py-3 rounded-xl bg-green-600 text-xl hover:bg-green-500 cursor-pointer text-black'>Add Expense</button>
                <div className='flex flex-col'>

                    <input type="text" name='name' placeholder='Enter the name of product' value={form.name} onChange={handleChange} />
                    <input type="text" name='amount' placeholder='Enter amount' value={form.amount} onChange={handleChange} />
                    <input type="text" name='category' placeholder='Enter Category' value={form.category} onChange={handleChange} />
                    <input type="date" name='date' value={form.date} onChange={handleChange} />

                </div>
                <div>
                    {
                        expense.map((item) => (
                            <div key={item.id}>
                                <p>{item.name}</p>
                                <p>{item.amount}</p>
                                <p>{item.date}</p>
                                <p>{item.category}</p>
                                <button onClick={() => handledelteTracker(item.id)} className="bg-red-500 text-white px-4 py-4 rounded-xl hover:bg-red-600"> Delete</button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>

    );
};

export default App;