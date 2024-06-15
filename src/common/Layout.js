import { Link, Outlet } from "react-router-dom";
import LoginButton from "../Components/LoginButton";
import LogoutButton from "../Components/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";

function Layout() {
  const { isAuthenticated } = useAuth0();
  return (
    <div>
      <nav>
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/">
              <h1>Car-Polling</h1>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/quiz">Quiz</Link>
          </li>
          <li className="nav-item">
            <Link to="/leaderboard">Leaderboard</Link>
          </li>
          <li className="nav-item">
            <Link to="/create-ride">Create Ride</Link>
          </li>
          <li className="nav-item">
            <Link to="/user-stories">User Stories</Link>
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
            <li className="nav-item">
              <LoginButton />
            </li>
          )}
        </ul>
      </nav>
      <Outlet />
      <div>
        <ul className="footer">
          <h1>Chat</h1>
        </ul>
      </div>
    </div>
  );
}

export default Layout;
