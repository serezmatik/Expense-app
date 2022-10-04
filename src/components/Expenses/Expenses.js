import './Expenses.css'
import Card from "../UI/Card";
import ExpensesFilter from './ExpensesFilter'
import React, {useState} from "react";
import ExpensesList from "./ExpensesList";


function Expenses(props) {
    const [filterYear, setFilterYear] = useState(' ')

    const filterChangeHandler = selected => {
        setFilterYear(selected)
    }

    const filtered = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filterYear
    })
    const yearList = props.items.map(expense =>{
        return expense.date.getFullYear().toString()
    })

    return <>
        <li>
            <Card className="expenses">
                <ExpensesFilter selected={filterYear} onYear={filterChangeHandler} yearnList={yearList}/>
                <ExpensesList items={filtered}/>
            </Card>
        </li>

    </>

}

export default Expenses
