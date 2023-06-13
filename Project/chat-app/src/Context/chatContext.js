import { createContext, useReducer } from "react";
import {
    getFirestore,
    doc,
    collection,
    getDoc,
    setDoc,
    updateDoc,
    arrayUnion,
} from "firebase/firestore";

import { auth, db } from "../App";

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
        case "SEND_MESSAGE":
            const sender = auth.currentUser.uid;
            const receiver = state.currentMessagingUser.id;
            const combinedId =
                sender > receiver
                    ? `${sender}${receiver}`
                    : `${receiver}${sender}`;
            const message = { sender, text: action.payload };
            const db = getFirestore();
            const chatRef = doc(db, "chats", combinedId);
            getDoc(chatRef).then((docSnapshot) => {
                if (docSnapshot.exists()) {
                    updateDoc(chatRef, {
                        messages: arrayUnion(message),
                    });
                } else {
                    setDoc(chatRef, {
                        messages: [message],
                    });
                    const userRef = doc(db, "users", auth.currentUser.uid);
                    getDoc(userRef).then((docSnapshot) => {
                        if (docSnapshot.exists()) {
                            updateDoc(userRef, {
                                currentDialogue: arrayUnion(combinedId),
                            });
                        } else {
                            setDoc(userRef, {
                                currentDialogue: [combinedId],
                            });
                        }
                    });
                    const messagingUserRef = doc(
                        db,
                        "users",
                        state.currentMessagingUser.id
                    );
                    getDoc(messagingUserRef).then((docSnapshot) => {
                        if (docSnapshot.exists()) {
                            updateDoc(messagingUserRef, {
                                currentDialogue: arrayUnion(combinedId),
                            });
                        } else {
                            setDoc(messagingUserRef, {
                                currentDialogue: [combinedId],
                            });
                        }
                    });
                }
            });
            return state;
        case "RESET":
            return initialState;
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
