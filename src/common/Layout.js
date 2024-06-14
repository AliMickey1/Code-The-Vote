// src/Layout.js
import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <nav>
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/">Home</Link>
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
      <hr />
      <Outlet />
    </div>
  );
}

export default Layout;
