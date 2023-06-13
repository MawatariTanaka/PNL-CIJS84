import { createContext, useReducer } from "react";
import {
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
    currentDialogue: [],
};

const chatReducer = (state, action) => {
    let sender, receiver, combinedId, chatRef, chat;
    switch (action.type) {
        case "CHANGE_USER":
            sender = auth.currentUser.uid;
            receiver = state.currentMessagingUser.id;
            combinedId =
                sender > receiver
                    ? `${sender}${receiver}`
                    : `${receiver}${sender}`;
            chatRef = doc(db, "chats", combinedId);
            getDoc(chatRef).then((docSnapshot) => {
                if (docSnapshot.exists()) {
                    chat = docSnapshot.data();
                }
            });
            return {
                ...state,
                currentMessagingUser: action.payload,
                currentDialogue: chat ? chat : [],
            };
        case "SEND_MESSAGE":
            sender = auth.currentUser.uid;
            receiver = state.currentMessagingUser.id;
            combinedId =
                sender > receiver
                    ? `${sender}${receiver}`
                    : `${receiver}${sender}`;
            const message = { sender, text: action.payload };
            chatRef = doc(db, "chats", combinedId);
            getDoc(chatRef).then((docSnapshot) => {
                if (docSnapshot.exists()) {
                    updateDoc(chatRef, {
                        messages: arrayUnion(message),
                    });
                    chat = docSnapshot.data();
                    return {
                        ...state,
                        currentDialogue: chat ? chat : [],
                    };
                }
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
