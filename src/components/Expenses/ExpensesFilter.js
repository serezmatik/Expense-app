import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {

    const filterChangeHandler = (event) => {
        props.onYear(event.target.value)
    }

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select value={props.selected} onChange={filterChangeHandler}>
                    {props.yearnList.map(year =>
                        <option value={year}>{year}</option>)}
                    <option value=' '>All</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter
