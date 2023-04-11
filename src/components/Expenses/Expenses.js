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

  let expensesContent = <p>No expenses found.</p>;
  if (expensesContent.length > 0) {
    filteredList.map((e) => (
      <ExpenseItem
        key={e.id}
        title={e.title}
        amount={e.amount}
        date={e.date}
      ></ExpenseItem>
    ));
  }
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          getSelectedYear={getSelectedYearHandler}
        />
        {/* {filteredList.length === 0 && <p>No expenses found.</p>}
        {filteredList.length > 0 &&
          filteredList.map((e) => (
            <ExpenseItem
              key={e.id}
              title={e.title}
              amount={e.amount}
              date={e.date}
            ></ExpenseItem>
          ))} */}
        {/* or we can go more leaner by this way below */}
        {expensesContent}
      </Card>
    </div>
  );
};
export default Expenses;
