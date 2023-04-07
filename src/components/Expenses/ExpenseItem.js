import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      {/*Like Card  can't use customed components as wrapper classes */}
      {/* but for doing that you can use props.children */}
      <div>
        <ExpenseDate date={props.date} />
      </div>
      <div className="expense-item__description ">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
};
export default ExpenseItem;
