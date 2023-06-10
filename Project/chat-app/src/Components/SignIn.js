import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../App";

export default function SignIn() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password).then(() => {
                navigate("/");
            });
        } catch (error) {
            if (error.code === "auth/wrong-password") {
                setError("Incorrect password.");
            } else if (error.code === "auth/user-not-found") {
                setError("The email is not found.");
            } else {
                setError(error.message);
            }
        }
    };

    return (
        <form className="auth-form" onSubmit={handleSignIn}>
            <h2 style={{ gridColumn: "1 / span 2" }}>Sign In</h2>
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
            <button type="submit">Sign In</button>
            <p className="new-user-signin">
                <span>New users?</span>
                <Link to="/register">Register</Link>
            </p>
        </form>
    );
}