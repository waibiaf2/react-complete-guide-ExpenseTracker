import React, {useState} from "react";

import './NewExpense.css';
import NewExpenseForm from "./NewExpenseForm";

const NewExpense = (props) => {
    const [showForm, setShowForm] = useState(false);
    
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random()
        }
        console.log(expenseData);
        props.onAddNewExpense(expenseData);
    };
    
    const toggleShowFormHandler = () => {
        setShowForm(prevState => !prevState);
    }
    
    if (!showForm) {
        return <div className="new-expense">
            <button onClick={toggleShowFormHandler}> Add New Expense</button>
        </div>
    }
    
    return (
        <div className="new-expense">
            <NewExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel = {toggleShowFormHandler}/>
        </div>
    );
};

export default NewExpense;