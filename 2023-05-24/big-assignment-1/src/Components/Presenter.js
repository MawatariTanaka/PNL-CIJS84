import { useContext } from "react";
import { AppContext } from "../appContext";
import ExpenseShow from "./ExpenseShow";

export default function Presenter() {
  const { appState } = useContext(AppContext);

  const expenseList = appState.expenseArray.map((expense) => {
    return (
      <ExpenseShow
        key={expense.id}
        name={expense.name}
        amount={expense.amount}
        date={expense.date}
      />
    );
  });

  return <div className="expense-list">{expenseList}</div>;
}
