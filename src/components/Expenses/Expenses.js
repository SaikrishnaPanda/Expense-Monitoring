import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import { useState } from "react";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const getSelectedYearHandler = (year) => {
    // console.log("inside Expense.js");
    // console.log(year);
    setFilteredYear(year);
  };
  const filteredList = props.items.filter((e) => {
    const yearTemp = new Date(e.date).getFullYear();
    return yearTemp === parseInt(filteredYear);
  });
  // console.log(filteredList);
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          getSelectedYear={getSelectedYearHandler}
        />
        {filteredList.map((e) => (
          <ExpenseItem
            key={e.id}
            title={e.title}
            amount={e.amount}
            date={e.date}
          ></ExpenseItem>
        ))}
      </Card>
    </div>
  );
};
export default Expenses;
