import React,{useState} from "react";
import './NewExpenses.css'
import ExpensesForm from "./ExpensesForm";
import { v4 as uuid } from 'uuid';

const NewExpenses = (props) => {
    const [add,setAdd] = useState(false)



    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: uuid()
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

