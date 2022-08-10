import Expenses from "./components/Expenses/Expenses";
import NewExpenses from "./components/NewExpense/NewExpenses";
import React, {useState} from "react";

const expenses = [
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



  const addExpenseHandler = expenses =>{
    console.log('In App.js')
    console.log(expenses)
  }
  return (
    <div>
      <NewExpenses onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App; 
