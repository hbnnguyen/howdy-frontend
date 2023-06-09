import React from "react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import userContext from "./userContext";

//TODO: fix this when routes are done

interface NavBarPropsInterface {
    logout: () => void;
}

function NavBar({ logout }: NavBarPropsInterface) {
    const { user } = useContext(userContext);

    function loggedOutNav() {
        return (
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to={"/"}>Friendly</NavLink>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" to={"/login"}>Log In</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={"/register"}>Register</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }

    function loggedInNav() {
        return (
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to={"/"}>Friendly</NavLink>
                    <div className="" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" to={"/profile"}>Profile</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={"/matching"}>Matching</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-item nav-link" to="/" onClick={logout}>Log Out</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>);
    }

    if (!user) {
        return loggedOutNav();
    } else {
        return loggedInNav();
    }
}

export default NavBar;