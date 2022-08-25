import Expenses from "./components/Expenses/Expenses";
import NewExpenses from "./components/NewExpense/NewExpenses";
import React, {useEffect, useState} from "react";

const expensesInit = [
    {
        id: 'e1',
        title: 'Subscription',
        amount: 294,
        date: new Date(2021, 3, 8)
    },
    {
        id: 'e2',
        title: 'Restaurant food',
        amount: 350,
        date: new Date(2020, 4, 28)
    },
    {
        id: 'e3',
        title: 'Study',
        amount: 475,
        date: new Date(2022, 5, 18)
    },
    {
        id: 'e4',
        title: 'Daily shopping',
        amount: 800,
        date: new Date(2019, 5, 9)
    }
]

function App() {

    const [expenses, setExpenses] = useState([])

    useEffect(() => {
        localStorage.setItem('data', JSON.stringify(expensesInit));
    }, []);

    const addExpenseHandler = data => {

        const expensesPrevious = JSON.parse(localStorage.getItem("data"))

        expensesPrevious.push(data)

        localStorage.setItem('data', JSON.stringify(expensesPrevious));

    }
    return (
        <div>
            <NewExpenses onAddExpense={addExpenseHandler} />
            <Expenses items={JSON.parse(localStorage.getItem("data"))}/>
        </div>
    );
}

export default App;
