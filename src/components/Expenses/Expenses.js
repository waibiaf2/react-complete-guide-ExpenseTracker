import './Expense.css'

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

const Expenses = (props) => {
    //const expenses = props.expenses;
    return (
        <Card className="expenses">
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