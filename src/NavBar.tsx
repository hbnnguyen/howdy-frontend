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
      <nav>
        <NavLink to={"/"}>Friendly</NavLink>
        <div>
          <NavLink to={"/login"}>Log In</NavLink>
          <NavLink to={"/register"}>Register</NavLink>
        </div>
      </nav>
    );
  }

  function loggedInNav() {
    return (<nav>
      <NavLink to={"/"}>Friendly</NavLink>
      <div>
        <NavLink to={"/profile"}>Profile</NavLink>
        <NavLink to={"/matching"}>Matching</NavLink>
        <NavLink className="nav-item nav-link" to="/" onClick={logout}>Log Out</NavLink>
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