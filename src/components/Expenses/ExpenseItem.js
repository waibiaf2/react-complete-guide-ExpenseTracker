import React, {useState} from "react";

import './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
    //State
    const [title, setTitle] = useState(props.expenseTitle);
    
    //Handlers
    const changeTitleHandler = () => {
        setTitle('This is the new title');
        console.log(title);
    };
    
    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={props.expenseDate}/>
                <div className="expense-item__description">
                    <h2>{title}</h2>
                    <div className="expense-item__price">${props.expenseAmount}</div>
                </div>
                <button onClick={changeTitleHandler}>Change Title</button>
            </Card>
        </li>
    );
};

export default ExpenseItem;