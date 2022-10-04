import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'
import Card from '../UI/Card'
import React, { useState } from 'react'



function ExpenseItem(props) {
    const [title, setTitle] = useState(props.title)
    console.log("ExpenseItem evaluated by REACT")

    const clickHandler = () => {
        setTitle("Updeted")
        console.log(title)
    }
    return (

        <Card className='expense-item'>
            <expenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>{props.amount} PLN</div>
            </div>
            <button onClick={clickHandler}>Click here!</button>
        </Card>


    )
}

export default ExpenseItem

