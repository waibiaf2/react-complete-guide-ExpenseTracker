import React, {useState} from "react";

import './NewExpense.css';
import NewExpenseForm from "./NewExpenseForm";

const NewExpense = (props) => {
    const [showElement, setShowElement] = useState(false)
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random()
        }
        console.log(expenseData);
        props.onAddNewExpense(expenseData);
    };
    
    const toggleShowElement = () => {
        setShowElement(prevState => !prevState);
    }
    
    if(!showElement) {
        return <div className="new-expense">
            <button onClick={toggleShowElement}>Add New Expense</button>
        </div>
    }
    
    return (
        <div className="new-expense">
            <NewExpenseForm
                onSaveExpenseData={saveExpenseDataHandler}
                toggleFormElement={toggleShowElement}
            />
        </div>
    );
};

export default NewExpense;