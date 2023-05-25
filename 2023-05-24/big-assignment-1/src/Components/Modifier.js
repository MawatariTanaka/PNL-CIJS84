import React, { useState, useContext } from "react";
import { AppContext } from "../appContext";
import { v4 as uuidv4 } from "uuid";

export default function Modifier() {
  const [isAddingExpense, setIsAddingExpense] = useState(false);
  const [newExpense, setNewExpense] = useState({
    id: "",
    name: "",
    amount: "",
    date: "",
  });
  const { dispatch } = useContext(AppContext);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewExpense({
      ...newExpense,
      [name]: value,
    });
  };

  const handleAddExpense = (event) => {
    event.preventDefault();
    const { name, amount, date } = newExpense;
    if (name && amount && date) {
      dispatch({
        type: "ADD_EXPENSE",
        payload: {
          id: uuidv4(),
          name,
          amount,
          date,
        },
      });
      setIsAddingExpense(false);
      setNewExpense({
        id: "",
        name: "",
        amount: "",
        date: "",
      });
    }
  };

  return (
    <div className="modifier">
      {isAddingExpense ? (
        <form className="add-expense-form">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter name here..."
            onChange={handleInputChange}
          />
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            name="amount"
            placeholder="Enter amount here..."
            onChange={handleInputChange}
          />
          <label htmlFor="date">Date</label>
          <input
            type="date"
            name="date"
            placeholder="dd/mm/yyyy"
            onChange={handleInputChange}
          />
          <div></div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <button className="add-expense-form-btn" onClick={handleAddExpense}>
              Add
            </button>
            <button
              className="add-expense-form-btn cancel-btn"
              onClick={() => setIsAddingExpense(false)}
            >
              Back
            </button>
          </div>
        </form>
      ) : (
        <button
          className="add-expense-btn"
          onClick={() => setIsAddingExpense(true)}
        >
          Add New Expense
        </button>
      )}
    </div>
  );
}
