import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList"
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";
import { useState } from "react";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2021");

  const onFilterPickHandler = (year) => {
    console.log(year);
    setFilterYear(year);
  };
  const filteredExpenses = props.expenseList.filter(
    (expense) => expense.date.getFullYear().toString() === filterYear
  );
  
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filterYear}
          onFilterPick={onFilterPickHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
  }

export default Expenses;
