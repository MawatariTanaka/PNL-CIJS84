import "./App.css";
import { useContext } from "react";
import { AppContext } from "./appContext";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Main from "./Components/Main";
import Login from "./Components/Login";

function App() {
    const { state } = useContext(AppContext);
    const { username } = state;

    return (
        <div className="App">
            <Header />
            {username === "" ? <Login /> : <Main />}
            <Footer />
        </div>
    );
}

export default App;
