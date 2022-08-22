import './ExpensesList.css';
import ExpenseItem from "./ExpenseItem";

const ExpensesList = props => {
    if (props.expenses.length === 0) {
        return <h2 className="expenses-list__fallback">
            No Expenses found.
        </h2>
    }

    return <ul className='expenses-list'>
        {
            props.expenses.map((expense, id) => (
                <ExpenseItem
                    key={expense.id}
                    expenseTitle={expense.title}
                    expenseAmount={expense.amount}
                    expenseDate={expense.date} />
            ))
        }
    </ul>
}

export default ExpensesList;