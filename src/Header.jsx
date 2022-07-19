import React from "react";
import logo from "./logo.svg";
import "./App.css"

export default function Header() {
    return (
        <header>
            <nav>
                <img src={logo} alt="react-logo" className="nav--icon" />
                <h3 className="nav--logo_text">ReactFacts</h3>
                <h4 className="nav--title">React Course - Project 1</h4>
            </nav>
        </header>
    )
}
