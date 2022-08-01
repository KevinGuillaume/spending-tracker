import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
/**
 * Component that is used to render the expense data
 * data that includes the amount of the expense,name of the expense, and date
 * @param {*} props attributes passed in: title,amount,date object
 * @returns expense item component
 */
function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
