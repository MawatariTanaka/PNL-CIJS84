import { createContext, useReducer } from "react";

const initialState = {
    currentMessagingUser: "",
};

const chatReducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_USER":
            return {
                ...state,
                currentMessagingUser: action.payload,
            };
        default:
            return state;
    }
};

export const ChatContext = createContext(initialState);

export const ChatProvider = ({ children }) => {
    const [state, dispatch] = useReducer(chatReducer, initialState);
    return (
        <ChatContext.Provider value={{ ...state, dispatch }}>
            {children}
        </ChatContext.Provider>
    );
};