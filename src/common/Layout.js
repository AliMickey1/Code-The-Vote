// src/Layout.js
import { Link, Outlet } from "react-router-dom";

function Layout() {
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
          <li className="nav-item">
            <Link to="/Profile">Profile</Link>
          </li>
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
