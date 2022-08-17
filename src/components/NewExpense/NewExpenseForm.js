import React, {useState} from "react";

import './NewExpenseForm.css'
const NewExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    
    // const [userInput, setUserInput] =useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate:''
    // })
    
    const titleChangeHandler = (e) => {
        setEnteredTitle(e.target.value);
        // console.log(enteredTitle);
        // setUserInput((prevState) =>{
        //     return { ...prevState, enteredTitle: e.target.value}
        // });
    };
    const dateChangeHandler = (e) => {
        setEnteredDate(e.target.value);
        // console.log(enteredDate);
        // setUserInput((prevState) =>{
        //     return { ...prevState, enteredDate: e.target.value}
        // });
    };
    const amountChangeHandler = (e) => {
        setEnteredAmount(e.target.value);
        // console.log(enteredAmount);
        // setUserInput((prevState) =>{
        //     return { ...prevState, enteredAmount: e.target.value}
        // });
    };
    
    const submitHandler = (e) => {
        e.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        }
        props.onSaveExpenseData(expenseData);
        
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };
    
    return <form onSubmit={submitHandler} >
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label htmlFor="">Title</label>
                <input
                    type="text"
                    placeholder="Enter Title"
                    value={enteredTitle}
                    onChange={titleChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label htmlFor="">Amount</label>
                <input
                    type="number"
                    placeholder='Enter Amount'
                    value={enteredAmount}
                    min="0.01" step="0.01"
                    onChange={amountChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label htmlFor="">Date</label>
                <input
                    type="date" value={enteredDate}
                    min="2019-01-01" max="2022-12-21"
                    onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit" >Add Expense</button>
        </div>
    </form>
};

export default NewExpenseForm;