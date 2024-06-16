import React from "react";
import { Link } from "react-router-dom";
import LoginButton from "../Components/LoginButton";
import LogoutButton from "../Components/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";

function Header() {
  const { isAuthenticated } = useAuth0();
  return (
    <ul className="nav-list">
      <li className="nav-item">
        <Link to="/">
          <h1>Car-Polling</h1>
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/quiz">Quizzes</Link>
      </li>
      <li className="nav-item">
        <Link to="/leaderboard">Leaderboard</Link>
      </li>
      <li className="nav-item">
        <Link to="/Volunteering">Become a Driver</Link>
      </li>
      <li className="nav-item">
        <Link to="/ride-request">Request a Ride</Link>
      </li>
      <li className="nav-item">
        <Link to="/Gibberish">Wrong Link Test</Link>
      </li>
      {isAuthenticated ? (
        <>
          <li className="nav-item">
            <Link to="/profile" className="nav-item">
              Profile
            </Link>
          </li>
          <li className="nav-item">
            <LogoutButton />
          </li>
        </>
      ) : (
        <>
          <li className="nav-item">
            <Link to="/signup">Sign up</Link>
          </li>
          <li className="nav-item">
            <LoginButton />
          </li>
        </>
      )}
    </ul>
  );
}

export default Header;
