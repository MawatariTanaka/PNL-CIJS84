import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore"; // import firestore dependencies
import { auth, db } from "../App"; // import your firebase app instance

export default function Register() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleRegister = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then(async () => {
                // add async keyword here
                await updateProfile(auth.currentUser, {
                    // add await here
                    displayName: username,
                });
                const user = auth.currentUser;
                await addDoc(collection(db, "users"), {
                    // add await here
                    id: user.uid,
                    email: user.email,
                    username: username,
                });
                navigate("/");
            })
            .catch((error) => {
                if (error.code === "auth/email-already-in-use") {
                    setError("Email already in use.");
                } else {
                    setError(error.message);
                }
            });
    };

    return (
        <form className="auth-form" onSubmit={handleRegister}>
            <h2 style={{ gridColumn: "1 / span 2" }}>Register</h2>

            <label className="auth-label" htmlFor="email">
                Email:
            </label>
            <input
                className="auth-input"
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <label className="auth-label" htmlFor="username">
                Username:
            </label>
            <input
                className="auth-input"
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />

            <label className="auth-label" htmlFor="password">
                Password:
            </label>

            <input
                className="auth-input"
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            {error && (
                <div style={{ color: "pink", gridColumn: "1 / span 2" }}>
                    {error}
                </div>
            )}
            <button type="submit">Register</button>
            <p className="new-user-signin">
                <span>Existing users?</span>
                <Link to="/signin">Sign In</Link>
            </p>
        </form>
    );
}
