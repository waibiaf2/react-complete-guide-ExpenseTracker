import './Expenses.css'
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";

const Expenses = (props) => {
    return (
        <Card className="expenses">
            {
                props.expenses.map((expense) => (
                    <ExpenseItem
                        expenseTitle={expense.title}
                        expenseDate={expense.date}
                        expenseAmount={expense.amount}
                    />
                ))
            }
        </Card>
    );
};

export default Expenses;