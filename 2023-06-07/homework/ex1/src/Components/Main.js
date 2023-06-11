import { useContext } from "react";
import { AppContext } from "../appContext";
import { useTranslation } from "react-i18next";

export default function Main() {
    const { state } = useContext(AppContext);
    const { username } = state;
    const { t } = useTranslation();
    return <div>{}</div>;
}
