import React, { createContext, useReducer } from "react";

const initialState = {
    username: "",
};

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_USERNAME":
            return {
                ...state,
                username: action.payload,
            };
        default:
            return state;
    }
};

export const AppContext = createContext(initialState);

export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
};
