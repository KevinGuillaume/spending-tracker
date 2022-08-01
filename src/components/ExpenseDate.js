import "./ExpenseDate.css";
/**
 * Component that handles the date
 * @param {*} props date is passed in
 * @returns Date componenet with Month/Year/Day
 */
function ExpenseDate(props) {
  //Converting the attribute of date to readable formats split by month/year/day
  const expenseMonth = props.date.toLocaleString("en-US", { month: "long" });
  const expenseYear = props.date.getFullYear();
  const expenseDay = props.date.toLocaleString("en-US", { day: "2-digit" });

  return (
    <div className="expense-date">
      
        <div className="expense-date__month">{expenseMonth}</div>
        <div className="expense-date__year">{expenseYear}</div>
        <div className="expense-date__day ">{expenseDay}</div>
      
    </div>
  );
}

export default ExpenseDate;
