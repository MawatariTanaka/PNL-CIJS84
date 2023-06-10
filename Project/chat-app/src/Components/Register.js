import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../App";

export default function Register() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleRegister = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
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

            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="password">Password:</label>

            <input
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
