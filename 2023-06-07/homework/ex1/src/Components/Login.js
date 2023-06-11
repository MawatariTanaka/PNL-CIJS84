import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { AppContext } from "../appContext";

export default function Login() {
    const { dispatch } = useContext(AppContext);
    const { username, setUsername } = useState();
    const { t } = useTranslation();

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch({ type: "SET_USERNAME", payload: username });
    };

    return (
        <form className="login-form">
            <label className="login-label">{t("login")}</label>
            <input
                className="login-input"
                type="text"
                placeholder={t("username")}
                onChange={(e) => setUsername(e.target.value)}
            ></input>
            <button
                className="login-submit"
                type="submit"
                onClick={handleLogin}
            >
                {t("login")}
            </button>
        </form>
    );
}
