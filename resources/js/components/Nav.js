import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        Fullstack-Curd-App
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarColor01"
                        aria-controls="navbarColor01"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div
                        className="collapse navbar-collapse"
                        id="navbarColor01"
                    >
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/">
                                    Home
                                    <span className="visually-hidden">
                                        (current)
                                    </span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/addContact">
                                    Add Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
