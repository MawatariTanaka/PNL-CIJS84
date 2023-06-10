import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Chatroom({ user }) {
    const navigate = useNavigate();
    useEffect(() => {
        if (!user) {
            navigate("/signin");
        }
    }, [user]);
    return (
        <div>
            <div>Chatroom</div>
        </div>
    );
}
