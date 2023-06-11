import React, { createContext, useReducer } from "react";

const initialState = {
    username: "",
    usernameList: ["John"],
};

const reducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                username: action.payload,
            };
        case "REGISTER":
            return {
                ...state,
                username: action.payload,
                usernameList: [...state.usernameList, action.payload],
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
