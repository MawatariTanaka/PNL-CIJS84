import { useState, useContext } from "react";
import { ChatContext } from "../Context/chatContext";

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
                {currentDialogue.map((message) => (
                    <div className="message">{message.text}</div>
                ))}
            </div>
            <div className="message-box">
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button
                    onClick={() => {
                        dispatch({ type: "SEND_MESSAGE", payload: message });
                        setMessage("");
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
