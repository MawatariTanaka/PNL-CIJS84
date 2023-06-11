import { useTranslation } from "react-i18next";

export default function Footer() {
    const { i18n } = useTranslation();

    const handleLanguageChange = (event) => {
        i18n.changeLanguage(event.target.value);
    };

    return (
        <footer>
            <select className="language-select" onChange={handleLanguageChange}>
                <option value="en">English</option>
                <option value="vi">Vietnamese</option>
            </select>
        </footer>
    );
}
