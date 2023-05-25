import { useContext } from "react";
import { AppContext } from "../appContext";
export default function ExpenseGraph({ year }) {
  const { appState } = useContext(AppContext);

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const expensesByMonth = {};

  appState.expenseArray.forEach((expense) => {
    const expenseYear = new Date(expense.date).getFullYear().toString();
    const expenseMonth = months[new Date(expense.date).getMonth()];

    if (year === "" || expenseYear === year) {
      if (!expensesByMonth[expenseMonth]) {
        expensesByMonth[expenseMonth] = 0;
      }
      expensesByMonth[expenseMonth] += parseFloat(expense.amount);
    }
  });

  const highestExpense = Math.max(...Object.values(expensesByMonth));

  return (
    <div className="expense-graph">
      {months.map((month) => {
        const height =
          expensesByMonth[month] &&
          `${(expensesByMonth[month] / highestExpense) * 100}%`;
        return (
          <div key={month} className="expense-tube-container">
            <div className="expense-tube">
              <div
                className="expense-tube-fill"
                style={{ height: height }}
              ></div>
            </div>
            <div className="expense-tube-month">{month}</div>
          </div>
        );
      })}
    </div>
  );
}
