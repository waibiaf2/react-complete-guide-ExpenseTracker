import React, {useState} from "react";
import './Expense.css'

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseChart from "./ExpenseChart";

const Expenses = (props) => {
    //const expenses = props.expenses;
    const [filteredYear, setFilteredYear] = useState('2020');
    
    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear );
    };
    
    const filteredExpenses = props.items.filter(expense => {
       return  expense.date.getFullYear().toString() === filteredYear;
    });
    
    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            <ExpenseChart expenses={filteredExpenses}/>
            {
               filteredExpenses.map((expense, id) => (
                    <ExpenseItem
                        key={expense.id}
                        expenseTitle={expense.title}
                        expenseAmount={expense.amount}
                        expenseDate={expense.date} />)
                )
            }
        </Card>
    );
}

export default Expenses;