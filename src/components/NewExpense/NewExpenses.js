import React,{useState} from "react";
import './NewExpenses.css'
import ExpensesForm from "./ExpensesForm";

const NewExpenses = (props) => {
    const [add,setAdd] = useState(false)

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id:Math.random().toString()
        }
        props.onAddExpense(expenseData)
        setAdd(false)

    }

    const startEditingHandler = ()=>{
        setAdd(true)
    }
    const stopAdd =() =>{
        setAdd(false)
    }
    return (
        <div className="new-expense">
            {!add &&  <button onClick={startEditingHandler}>Add new expense</button>}
            { add && <ExpensesForm
                onSaveExpenseData = {saveExpenseDataHandler}
                onCancel={stopAdd}

            />}
        </div>
    )

}
export default NewExpenses

