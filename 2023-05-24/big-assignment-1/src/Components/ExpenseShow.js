import React from "react";

export default function ExpenseShow({ name, amount, date }) {
  const newDate = new Date(date);
  const monthString = newDate.toLocaleString("en-US", {
    month: "long",
  });
  const dayString = newDate.toLocaleString("en-US", {
    day: "numeric",
  });
  const yearString = newDate.toLocaleString("en-US", {
    year: "numeric",
  });

  return (
    <div className="expense-show">
      <div className="expense-show-date">
        <div className="month">{monthString}</div>
        <div className="year">{yearString}</div>
        <div className="day">{dayString}</div>
      </div>
      <div className="expense-show-name">{name}</div>
      <div className="expense-show-amount">{amount}</div>
    </div>
  );
}
