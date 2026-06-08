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
    const [data, setdata] = useState("");
    const addExpense = () => {
        if (data.trim() === '') return;
        const newdata: ExpenseTracker = {
            id: Date.now(),
            name: data,
            amount: Number.parseInt(data),
            category: data,
            date: data

        }
        setExpense((prev) => [...prev, newdata]);
        setdata("");

    }
    return (
        <>

            <div className='flex items-center justify-center min-h-screen flex-col '>
                <button onClick={addExpense} className='px-5 py-3 rounded-xl bg-green-600 text-xl hover:bg-green-500 cursor-pointer text-black'>Add Expense</button>
                <div className='flex flex-col'>
                    
                        <input type="text" placeholder='Enter the name of product' value={data} onChange={(e) => setdata(e.target.value)} />
                        <input type="text" placeholder='Enter amount' value={data} onChange={(e) => setdata(e.target.value)} />
                        <input type="text" placeholder='Enter Category' value={data} onChange={(e) => setdata(e.target.value)} />
                    
                </div>
                <div>
                    {
                        expense.map((item) => (
                            <div key={item.id}>
                                <p>{item.name}</p>
                                <p>{item.amount}</p>
                                <p>{item.date}</p>
                                <p>{item.category}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>

    );
};

export default App;