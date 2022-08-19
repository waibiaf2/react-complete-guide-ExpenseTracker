import React, {useState} from "react";
import './Expense.css'

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
    //const expenses = props.expenses;
    const [filteredYear, setFilteredYear] = useState('2020');
    
    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };
    
    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            { props.expenses.map((expense) => (
                <ExpenseItem
                    expenseTitle={expense.title}
                    expenseAmount={expense.amount}
                    expenseDate={expense.date}
                />
            ))}
        </Card>
    );
}

export default Expenses;