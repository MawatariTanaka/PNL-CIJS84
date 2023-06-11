import React from "react";
import { useTranslation } from "react-i18next";

export default function Header() {
    const { t } = useTranslation();
    return (
        <header>
            <h1 className="app-name">Mindx</h1>
            <button className="login-btn">{t("login-btn")}</button>
        </header>
    );
}
