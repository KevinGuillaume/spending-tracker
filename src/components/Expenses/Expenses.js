import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import "./Expenses.css";
import { useState } from "react";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("");

  const onFilterPickHandler = (year) => {
    console.log(year);
    setFilterYear(year);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filterYear}
          onFilterPick={onFilterPickHandler}
        />
        {props.expenseList.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
