import ExpenseItem from "./ExpenseItem";
import "./Expenses.css"

function Expenses(props) {
  const expenseList = props.expenseList;

  return (
    <div className="expenses">
      <ExpenseItem
        title={expenseList[0].title}
        amount={expenseList[0].amout}
        date={expenseList[0].date}
      />
      <ExpenseItem
        title={expenseList[1].title}
        amount={expenseList[1].amout}
        date={expenseList[1].date}
      />
      <ExpenseItem
        title={expenseList[2].title}
        amount={expenseList[2].amout}
        date={expenseList[2].date}
      />
      <ExpenseItem
        title={expenseList[3].title}
        amount={expenseList[3].amout}
        date={expenseList[3].date}
      />
    </div>
  );
}

export default Expenses;
