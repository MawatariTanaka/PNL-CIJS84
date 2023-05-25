import { createContext, useReducer } from "react";

export const AppContext = createContext();

const initialState = {
  expenseArray: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return {
        ...state,
        expenseArray: [...state.expenseArray, action.payload],
      };
    case "UPDATE_EXPENSE":
      return {
        ...state,
        expenseArray: state.expenseArray.map((expense) => {
          if (expense.id === action.payload.id) {
            return action.payload;
          }
          return expense;
        }),
      };
    case "DELETE_EXPENSE":
      return {
        ...state,
        expenseArray: state.expenseArray.filter(
          (expense) => expense.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

export const AppProvider = ({ children }) => {
  const [appState, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ appState, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
