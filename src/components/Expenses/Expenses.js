import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";
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
        <ExpenseChart expenses={filteredList} />
        <ExpensesList items={filteredList} />
      </Card>
    </div>
  );
};
export default Expenses;
