import { useContext, useState } from "react";
import { AppContext } from "../appContext";

export default function ExpenseShow({ id, name, amount, date }) {
  const { dispatch } = useContext(AppContext);
  const [isUpdatingExpense, setIsUpdatingExpense] = useState(false);
  const [newExpense, setNewExpense] = useState({
    id: id,
    name: name,
    amount: amount,
    date: date,
  });

  const formattedDate = new Date(date);
  const month = formattedDate.toLocaleString("en-US", {
    month: "short",
  });
  const day = formattedDate.toLocaleString("en-US", {
    day: "numeric",
  });
  const year = formattedDate.toLocaleString("en-US", {
    year: "numeric",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewExpense({
      ...newExpense,
      [name]: value,
    });
  };

  const handleUpdate = () => {
    try {
      dispatch({
        type: "UPDATE_EXPENSE",
        payload: newExpense,
      });
      setIsUpdatingExpense(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = () => {
    try {
      dispatch({
        type: "DELETE_EXPENSE",
        payload: newExpense,
      });
      setIsUpdatingExpense(false);
    } catch (error) {
      console.log(error);
    }
  };

  const updateForm = () => (
    <div className="update-expense-form">
      <label htmlFor="name"> Name </label>
      <input
        type="text"
        name="name"
        value={newExpense.name}
        onChange={handleInputChange}
      />
      <label htmlFor="amount"> Amount </label>
      <input
        type="number"
        name="amount"
        value={newExpense.amount}
        onChange={handleInputChange}
      />
      <label htmlFor="date"> Date </label>
      <input
        type="date"
        name="date"
        value={newExpense.date}
        onChange={handleInputChange}
      />
      <div> </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <button
          className="update-expense-form-btn update-btn"
          onClick={handleUpdate}
        >
          Update
        </button>
        <button
          className="update-expense-form-btn delete-btn"
          onClick={handleDelete}
        >
          Delete
        </button>
        <button
          className="update-expense-form-btn cancel-btn"
          onClick={() => setIsUpdatingExpense(false)}
        >
          Cancel
        </button>
      </div>
    </div>
  );

  return (
    <>
      <div className="expense-show" onClick={() => setIsUpdatingExpense(true)}>
        <div className="expense-show-date">
          <div className="month"> {month} </div>
          <div className="year"> {year} </div>
          <div className="day"> {day} </div>
        </div>
        <div className="expense-show-description">
          <div className="expense-show-name"> {name} </div>
          <div className="expense-show-amount"> $ {amount} </div>
        </div>
      </div>
      {isUpdatingExpense && updateForm()}
    </>
  );
}
