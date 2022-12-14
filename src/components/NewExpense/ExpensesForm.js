import React, {useState} from "react";
import './ExpensesForm.css'

export default function ExpensesForm(props) {

    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')


    // const [userInput,setUserInput] = useState({
    //     enteredTitle:'',
    //     enteredAmount:'',
    //     enteredDate:''
    // })

    const TitleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)

        // setUserInput({
        //     ...userInput,
        //     enteredTitle:event.target.value
        // })


        // setUserInput((prevState) => {
        // return{...prevState, enteredTitle:event.target.value}
        // })

    }

    const AmountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)

        // setUserInput({
        //     ...userInput,
        //     enteredAmount:event.target.value
        // })
    }

    const DateChangeHandler = (event) => {
        setEnteredDate((event.target.value))

        // setUserInput({
        //         ...userInput,
        //         enteredDate: event.target.value
        //     }
        // )
    }

    const submitHandler = (event) => {
        event.preventDefault()

        const convertedDate =  new Date(enteredDate)

        const expenseData = {
            title: enteredTitle,
            amount: parseInt(enteredAmount),
            date: convertedDate
        }
        props.onSaveExpenseData(expenseData)
        setEnteredDate('')
        setEnteredAmount('')
        setEnteredTitle('')

    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={TitleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' value={enteredAmount} min='0.01' step='0.01' onChange={AmountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' value={enteredDate} onChange={DateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__action">
                <button type = "button" onClick={props.onCancel}>Cancel</button>
                <button type='submit'>Add Expense</button>

            </div>
        </form>
    )

}
