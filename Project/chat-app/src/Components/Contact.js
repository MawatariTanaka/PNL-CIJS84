import React, { useState } from "react";
import { db } from "../App";
import { collection, query, where, getDocs } from "firebase/firestore";

export default function Contact() {
    const [username, setUsername] = useState("");
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    const searchUsers = async () => {
        const usersRef = collection(db, "users");
        const q = query(
            usersRef,
            where("username", ">=", username),
            where("username", "<=", username + "\uf8ff")
        );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            setUser(doc.data());
        });
    };

    return (
        <div className="contact-list">
            <input
                className="search-contact"
                type="text"
                placeholder="Find a contact..."
                value={username}
                onKeyDown={(e) => {
                    if (e.code == "Enter") {
                        console.log(user);
                        searchUsers();
                    }
                }}
                onChange={(e) => setUsername(e.target.value)}
            />
            <div className="searched-users">
                {user && (
                    <div className="suggested-user">
                        <div className="suggested-user-name">
                            {user.username}
                        </div>
                        <div className="suggested-user-email">{user.email}</div>
                    </div>
                )}
            </div>
        </div>
    );
}
