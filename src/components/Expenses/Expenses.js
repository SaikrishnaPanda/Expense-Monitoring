import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
const Expenses = (props) => {
  return (
    <div className="expenses">
      {props.items.map((e) => (
        <ExpenseItem
          key={e.id}
          title={e.title}
          amount={e.amount}
          date={e.date}
        ></ExpenseItem>
      ))}
    </div>
  );
};
export default Expenses;
