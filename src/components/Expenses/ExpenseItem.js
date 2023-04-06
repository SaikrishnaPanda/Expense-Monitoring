import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import { useState } from "react";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("Updated");
    console.log(title);
  };
  return (
    <Card className="expense-item">
      {/*Like Card  can't use customed components as wrapper classes */}
      {/* but for doing that you can use props.children */}
      <div>
        <ExpenseDate date={props.date} />
      </div>
      <div className="expense-item__description ">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button
        onClick={() => {
          clickHandler();
        }}
      >
        Change Title
      </button>
    </Card>
  );
};
export default ExpenseItem;
