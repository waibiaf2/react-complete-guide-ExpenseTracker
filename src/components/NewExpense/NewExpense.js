import React from "react";

import './NewExpense.css';
import NewExpenseForm from "./NewExpenseForm";

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random()
        }
        console.log(expenseData);
        props.onAddNewExpense(expenseData);
    };
    
    return (
        <div className="new-expense">
            <NewExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    );
};

export default NewExpense;