import "./App.css";
import { useState, useContext } from "react";
import { AppContext } from "./AppContext";
import { Routes, Route, Link, useParams } from "react-router-dom";

function Login() {
    const { state, dispatch } = useContext(AppContext);
    const { usernameList } = state;
    const [username, setUsername] = useState("");

    const handleInputChange = (event) => setUsername(event.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (usernameList.includes(username))
            dispatch({ type: "LOGIN", payload: username });
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input
                        type="text"
                        name="username"
                        onChange={handleInputChange}
                        value={username}
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

function Register() {
    const { state, dispatch } = useContext(AppContext);
    const { usernameList } = state;

    const [username, setUsername] = useState("");

    const handleInputChange = (event) => {
        setUsername(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!usernameList.includes(username)) {
            dispatch({ type: "REGISTER", payload: username });
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input
                        type="text"
                        name="username"
                        onChange={handleInputChange}
                        value={username}
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

function Products() {
    return (
        <div>
            <h2>Products</h2>
        </div>
    );
}

function ProductDetails() {
    const { id } = useParams();
    return (
        <div>
            <h2>Product Details</h2>
            <p>ID: {id}</p>
        </div>
    );
}

function Invoices() {
    return (
        <div>
            <h2>Invoices</h2>
        </div>
    );
}

function InvoiceDetails() {
    const { id } = useParams();
    return (
        <div>
            <h2>Invoice Details</h2>
            <p>ID: {id}</p>
        </div>
    );
}

function Cart() {
    return (
        <div>
            <h2>Cart</h2>
        </div>
    );
}

function Profile() {
    return (
        <div>
            <h2>Profile</h2>
        </div>
    );
}

function App() {
    const { state } = useContext(AppContext);
    const { username } = state;

    const greeting = username ? `Hello, ${username}!` : null;

    return (
        <div className="App">
            <nav>
                <ul>
                    <li>
                        <Link to="/products">Products</Link>
                    </li>
                    <li>
                        <Link to="/invoices">Invoices</Link>
                    </li>
                    <li>
                        <Link to="/cart">Cart</Link>
                    </li>
                    <li>
                        <Link to="/profile">{greeting || "Login"}</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/auth">
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                </Route>

                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<ProductDetails />} />
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/invoices/:id" element={<InvoiceDetails />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="*" element={<h1>Not Found</h1>} />
            </Routes>
        </div>
    );
}

export default App;
