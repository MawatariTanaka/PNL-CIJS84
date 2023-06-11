import { useContext, useState } from "react";
import { ChatContext } from "../Context/chatContext";

function BlankMessage() {
    return (
        <div className="blank-message">
            <p>Click on a user to show the message with that user.</p>
        </div>
    );
}

function CurrentMessage() {
    const [message, setMessage] = useState("");
    const { currentMessagingUser } = useContext(ChatContext);
    const userPhoto =
        currentMessagingUser.photoURL ||
        `${process.env.PUBLIC_URL}/icon/profile-user.png`;

    return (
        <div>
            <div className="message-user-to">
                <img className="message-user-img" src={userPhoto} />
                <p className="message-user-name">
                    {currentMessagingUser.username}
                </p>
            </div>
            <div className="message-box">
                <input
                    className="message-input"
                    type="text"
                    onChange={(e) => setMessage(e.target.value)}
                />
            </div>
        </div>
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
