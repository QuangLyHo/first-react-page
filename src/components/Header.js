import React from "react"
import reactIcon from "../images/react-icon-small.png"

export default function Header() {
    return (
        <header>
            <nav className="nav">
                <img className="nav-logo" src={reactIcon} alt="react logo" />
                <ul className="nav-items">
                    <li>About</li>
                    <li>Price</li>
                    <li>Contact</li>
                    <li>finally</li>
                </ul>
            </nav>
        </header>
    )
}