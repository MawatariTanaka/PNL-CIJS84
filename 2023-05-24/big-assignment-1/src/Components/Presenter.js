import { useContext, useState } from "react";
import { AppContext } from "../appContext";
import ExpenseGraph from "./ExpenseGraph";
import ExpenseShow from "./ExpenseShow";

export default function Presenter() {
  const { appState } = useContext(AppContext);
  const [selectedYear, setSelectedYear] = useState("");

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const expenseList = appState.expenseArray
    .filter(
      (expense) =>
        selectedYear === "" ||
        new Date(expense.date).getFullYear() === parseInt(selectedYear)
    )
    .map((expense) => {
      return (
        <ExpenseShow
          key={expense.id}
          id={expense.id}
          name={expense.name}
          amount={expense.amount}
          date={expense.date}
        />
      );
    });

  const years = Array.from(
    new Set(
      appState.expenseArray.map((expense) =>
        new Date(expense.date).getFullYear()
      )
    )
  );

  const yearOptions = years.map((year) => {
    return (
      <option key={year} value={year}>
        {year}
      </option>
    );
  });

  return (
    <div className="expense-list">
      <div className="expense-list-header">
        <label htmlFor="year-filter" style={{ fontSize: "1.2rem" }}>
          Filter by year
        </label>
        <select
          name="year-filter"
          id="year-filter"
          className="year-filter"
          value={selectedYear}
          onChange={handleYearChange}
        >
          <option value="">All years</option>
          {yearOptions}
        </select>
      </div>
      <ExpenseGraph year={selectedYear} />
      {expenseList}
    </div>
  );
}
