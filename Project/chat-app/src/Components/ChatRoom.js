import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Contact from "./Contact";

export default function Chatroom({ user }) {
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate("/signin");
        }
    }, [user]);

    return (
        <div className="chatroom-container">
            <Contact />
            <div className="chatroom-main-message"></div>
        </div>
    );
}
