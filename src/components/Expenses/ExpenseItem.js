import './ExpenseItem.css';

import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
    return (
        <Card className="expense-item">
            <ExpenseDate date = {props.expenseDate}/>
            <div className="expense-item__description">
                <div>{props.expenseTitle}</div>
                <div className="expense-item__price">{props.expenseAmount}</div>
            </div>
        </Card>
    )
}

export default ExpenseItem