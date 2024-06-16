// src/pages/LandingPage.js
import React from "react";
import { useState } from "react";
import "../App.css"; // Make sure this path is correct
import { Link } from "react-router-dom";
import Leaderboard from "../Components/Leaderboard"; 
import participationBadge from '../assets/participation-badge.png.webp'; // Adjust the path as necessary
import quizMaster from '../assets/quiz-master.png'; // Adjust the path as necessary
import topContributor from '../assets/top-contributor.png'; // Adjust the path as necessary


function LandingPage() {

const [showLeaderboard, setShowLeaderboard] = useState(false);

const toggleLeaderboard = () => {
  setShowLeaderboard(!showLeaderboard);
};

  return (
    <div className="LandingPage">
      <header className="LandingPage-header">
        <h1>Welcome to Car-Polling</h1>
        <p>
          Engage in protecting election integrity by participating in our
          car-pooling initiative.
        </p>
      </header>

      <div className="authContainer"></div>
      <div className="LandingPage-content">
        <section className="LandingPage-section">
          <h2>Election Protection Resources</h2>
          <ul>
            <li><a href="https://statesuniteddemocracy.org/priorities/election-protection/" target="_blank" rel="noopener noreferrer">States United Democracy Center: Election Protection</a></li>
            <li><a href="https://www.brennancenter.org/our-work/research-reports/digital-disinformation-and-vote-suppression" target="_blank" rel="noopener noreferrer">Brennan Center for Justice: Digital Disinformation and Vote Suppression</a></li>
            <li><a href="https://www.safewise.com/state-of-safety/" target="_blank" rel="noopener noreferrer">SafeWise: State of Safety</a></li>
            <li><a href="https://projects.fivethirtyeight.com/polls/president-general/2024/" target="_blank" rel="noopener noreferrer">FiveThirtyEight: 2024 Presidential Polls</a></li>
            <li><a href="https://www.apa.org/news/press/releases/2019/08/fear-mass-shooting" target="_blank" rel="noopener noreferrer">APA: Fear of Mass Shootings</a></li>
            <li><a href="https://electiontaskforce.org/elections-dashboard/" target="_blank" rel="noopener noreferrer">Election Task Force: Elections Dashboard</a></li>
            <li><a href="https://www.rockthevote.org/" target="_blank" rel="noopener noreferrer">Rock the Vote</a></li>
            <li><a href="https://www.lgbtmap.org/democracy-maps/laws_protecting_election_officials_against_threats" target="_blank" rel="noopener noreferrer">LGBTQ MAP: Laws Protecting Election Officials Against Threats</a></li>
          </ul>
        </section>
        <section className="LandingPage-section">
          <h2>Want a badge like this? Participate in our Quizzes or share a ride!</h2>
          <div className="badges">
            <img src={participationBadge} alt="Participation Badge" className="badge-icon" />
            <img src={quizMaster} alt="Quiz Master" className="badge-icon" />
            <img src={topContributor} alt="Top Contributor" className="badge-icon" />
          </div>


          <div className="badge-links">
            <Link to="/quiz" className="badge-link">Take the Quiz</Link>
            <Link to="/ride-request" className="badge-link">Request a Ride</Link>
          </div>

          
          <div className="cartoon-car">
          <img src="https://clipartmag.com/images/car-cartoon-images-16.jpg" alt="Cartoon Car" />
          </div>
      </section>

        <section className="LandingPage-section">
          <h2>Leaderboard</h2>
          {showLeaderboard && <Leaderboard />}
          <button onClick={toggleLeaderboard}>
            {showLeaderboard ? "Read Less" : "Read More"}
          </button>
        </section>
      </div>
    </div>
  );
}

export default LandingPage;
