import React, {useState} from "react";
import './Expense.css'

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
    //const expenses = props.expenses;
    const [filteredYear, setFilteredYear] = useState('2021');
    
    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };
    
    const filteredExpenses = props.items.filter(expense => {
       return  expense.date.getFullYear().toString() === filteredYear;
    });

    let expensesContent = <p className='expense-item'>No Expenses found.</p>;
    if (filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.map((expense, id) => (
            <ExpenseItem
                key={expense.id}
                expenseTitle={expense.title}
                expenseAmount={expense.amount}
                expenseDate={expense.date} />)
        )
    }

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            {expensesContent}
        </Card>
    );
}

export default Expenses;