import React from "react";
import { useAuth } from "../context/AuthContext";
import LanguageSelector from "./LanguageSelector";

//user navigation bar
export default function UserNavBar({ title }) {
    const { translate } = useAuth();
    return (
        <div className="nav-bar">
            <div className="nav-left"></div>
            <div className="nav-center">
                <h4>{translate(title)}</h4>
            </div>
            <div className="nav-right">
                <LanguageSelector />
            </div>
        </div>
    );
}
