import { useState, useContext } from "react";
import { ChatContext } from "../Context/chatContext";
import {
    doc,
    collection,
    getDoc,
    setDoc,
    updateDoc,
    arrayUnion,
} from "firebase/firestore";
import { auth, db } from "../App";

function BlankMessage() {
    return (
        <div className="blank-message">
            <p>Click on a user to show the message with that user.</p>
        </div>
    );
}

function CurrentMessage() {
    const { dispatch } = useContext(ChatContext);
    const { currentMessagingUser, currentDialogue } = useContext(ChatContext);
    const [message, setMessage] = useState("");
    const userPhoto =
        currentMessagingUser.photoURL ||
        `${process.env.PUBLIC_URL}/icon/profile-user.png`;

    return (
        <>
            <div className="message-user-to">
                <img className="message-user-img" src={userPhoto} />
                <p className="message-user-name">
                    {currentMessagingUser.username}
                </p>
            </div>
            <div className="dialogue">
                {currentDialogue && currentDialogue.length > 0
                    ? currentDialogue.map((messageObj, index) => (
                          <div key={index} className="message">
                              {messageObj.text}
                          </div>
                      ))
                    : null}
            </div>
            <div className="message-box">
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button
                    onClick={() => {
                        let chat;
                        const sender = auth.currentUser.uid;
                        const receiver = currentMessagingUser.id;
                        const combinedId =
                            sender > receiver
                                ? `${sender}${receiver}`
                                : `${receiver}${sender}`;
                        const currentMessage = {
                            sender: sender,
                            text: message,
                        };
                        const chatRef = doc(db, "chats", combinedId);
                        getDoc(chatRef)
                            .then((docSnapshot) => {
                                if (docSnapshot.exists()) {
                                    updateDoc(chatRef, {
                                        messages: arrayUnion(currentMessage),
                                    });
                                } else {
                                    setDoc(chatRef, {
                                        messages: [currentMessage],
                                    });
                                    const userRef = doc(db, "users", sender);
                                    getDoc(userRef).then((docSnapshot) => {
                                        if (docSnapshot.exists()) {
                                            updateDoc(userRef, {
                                                currentDialogue:
                                                    arrayUnion(combinedId),
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
                                        receiver
                                    );
                                    getDoc(messagingUserRef).then(
                                        (docSnapshot) => {
                                            if (docSnapshot.exists()) {
                                                updateDoc(messagingUserRef, {
                                                    currentDialogue:
                                                        arrayUnion(combinedId),
                                                });
                                            } else {
                                                setDoc(messagingUserRef, {
                                                    currentDialogue: [
                                                        combinedId,
                                                    ],
                                                });
                                            }
                                        }
                                    );
                                }
                            })
                            .then(() => {
                                const sender = auth.currentUser.uid;
                                const receiver = currentMessagingUser.id;
                                const combinedId =
                                    sender > receiver
                                        ? `${sender}${receiver}`
                                        : `${receiver}${sender}`;
                                const chatRef = doc(db, "chats", combinedId);
                                getDoc(chatRef)
                                    .then((docSnapshot) => {
                                        chat = docSnapshot.data();
                                    })
                                    .then(() => {
                                        dispatch({
                                            type: "SEND_MESSAGE",
                                            payload: chat,
                                        });
                                        setMessage("");
                                    });
                            });
                    }}
                >
                    <img
                        src={`${process.env.PUBLIC_URL}/icon/send-message.png`}
                        alt="send"
                    />
                </button>
            </div>
        </>
    );
}

export default function Message() {
    const { currentMessagingUser, dispatch } = useContext(ChatContext);
    return (
        <div className="messaging-space">
            {currentMessagingUser ? <CurrentMessage /> : <BlankMessage />}
        </div>
    );
}
