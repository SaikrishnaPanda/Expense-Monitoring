import { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = () => {
  const [enterdTitle, setEnteredTitle] = useState("");
  const [enterdAmount, setEnteredAmount] = useState("");
  const [enterdDate, setEnteredDate] = useState("");
  // we can use useState once instade of 3 times like above
  // const [userInput, setUserInput] = useState({
  //   enterdTitle: "",
  //   enterdAmount: "",
  //   enterdDate: "",
  // });

  const titelChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enterdTitle: event.target.value,
    // });
    // setUserInput((privateState) => {
    //   return { ...privateState, enterdTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    //   setUserInput({
    //     ...userInput,
    //     enterdAmount: event.target.value,
    //   });
    // setUserInput((privateState) => {
    //   return { ...privateState, enterdAmount: event.target.value };
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enterdDate: event.target.value,
    // });
    // setUserInput((privateState) => {
    //   return { ...privateState, enterdDate: event.target.value };
    // });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enterdTitle,
      amount: enterdAmount,
      date: new Date(enterdDate),
    };
    console.log(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enterdTitle}
            onChange={titelChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enterdAmount}
            onChange={amountChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            step="2022-01-01"
            value={enterdDate}
            onChange={dateChangeHandler}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
