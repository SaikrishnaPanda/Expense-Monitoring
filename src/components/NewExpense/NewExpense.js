import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // console.log(expenseData);
    props.addExpenseData(expenseData);
    setIsAddClicked(false);
  };

  const [isAddClicked, setIsAddClicked] = useState(false);
  const addNewExpensesHandler = () => {
    setIsAddClicked(true);
  };
  const onCancelButton = () => {
    setIsAddClicked(false);
  };
  return (
    <div className="new-expense">
      {!isAddClicked && (
        <button onClick={addNewExpensesHandler}>Add New Expenses</button>
      )}
      {isAddClicked && (
        <ExpenseForm
          onSaveExpenseData={onSaveExpenseDataHandler}
          onCancel={onCancelButton}
        />
      )}
    </div>
  );
};
export default NewExpense;
