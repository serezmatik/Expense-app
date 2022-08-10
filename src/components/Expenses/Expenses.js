import './Expenses.css'
import Card from "../UI/Card";
import ExpensesFilter from './ExpensesFilter'
import React, {useState} from "react";
import ExpensesList from "./ExpensesList";


function Expenses(props) {
    const [filterYear, setFilterYear] = useState('2021')

    const filterChangeHandler = selected => {
        setFilterYear(selected)
    }
    const filtered = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filterYear
    })

    return <>
        <li>
            <Card className="expenses">
                <ExpensesFilter selected={filterYear} onYear={filterChangeHandler}/>
                <ExpensesList items={filtered}/>
            </Card>
        </li>

    </>

}

export default Expenses
