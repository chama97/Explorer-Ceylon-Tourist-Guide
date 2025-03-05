import React from 'react';
import "./nav.css";
import logimg from "../../assets/logo/logo1.png";
import { useState } from "react";

function Nav() {

    const [active, setActive] = useState("Home");

    return (
        <nav className="navbar">
            <div className="logo">
                <img src={logimg} alt="Explorer Ceylon" />
            </div>
            <ul className="nav-links">
                {["Home", "Tours", "Services", "Blogs", "Contact Us"].map((item) => (
                    <li
                        key={item}
                        className={active === item ? "active" : ""}
                        onClick={() => setActive(item)}
                    >
                        {item}
                    </li>
                ))}
            </ul>
            <button className="sign-in">Sign In</button>
        </nav>
    )
}

export default Nav