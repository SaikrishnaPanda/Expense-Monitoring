import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
const Expenses = (props) => {
  const getSelectedYearHandler = (year) => {
    console.log("inside Expense.js");
    console.log(year);
  };
  return (
    <div>
      <ExpensesFilter getSelectedYear={getSelectedYearHandler} />
      <Card className="expenses">
        {props.items.map((e) => (
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
