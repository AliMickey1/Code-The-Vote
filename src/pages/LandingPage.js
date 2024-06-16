import React, { useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import Leaderboard from "../Components/Leaderboard";
import Quiz from "../Components/Quiz";
import participationBadge from "../assets/participation-badge.png.webp";
import quizMaster from "../assets/quiz-master.png";
import topContributor from "../assets/top-contributor.png";
import VolunteerDriver from "./VolunteerSignup";

function LandingPage() {
  const [showSection, setShowSection] = useState("");
  const navigate = useNavigate();

  const handleBack = () => {
    setShowSection("");
  };

  const handleRequestRide = () => {
    navigate("/ride-request");
  };

  const handleVolunteerRide = () => {
    navigate("/Volunteering");
  };

  const handleQuiz = () => {
    setShowSection("quiz");
  };

  const handleLeaderboard = () => {
    setShowSection("leaderboard");
  };

  const handleResources = () => {
    setShowSection("resources");
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

      {showSection === "" && (
        <div className="LandingPage-content">
          <div className="left-column">
            <div className="column">
              <h3>Need help voting?</h3>
              <button onClick={handleRequestRide}>
                Click here to *Request a ride*
              </button>
            </div>
            <div className="column">
              <h3>Interested in volunteering?</h3>
              <button onClick={handleVolunteerRide}>
                Click here to *Volunteer a ride*
              </button>
            </div>
          </div>
          <div className="right-column">
            <h3>Want a cool badge like this?</h3>
            <div className="badges">
              <img
                src={participationBadge}
                alt="Participation Badge"
                className="badge-icon"
              />
              <img src={quizMaster} alt="Quiz Master" className="badge-icon" />
              <img
                src={topContributor}
                alt="Top Contributor"
                className="badge-icon"
              />
            </div>

            <p>You can earn them by sharing rides and taking quizzes!</p>

            <div className="badge-links">
              <button onClick={handleQuiz}>Click here for quizzes!</button>
              <button onClick={handleLeaderboard}>
                Click here to see leaderboard info!
              </button>
              <button onClick={handleResources}>
                Click here to view important Election Protection Resources!
              </button>
            </div>
          </div>
        </div>
      )}

      {showSection === "leaderboard" && (
        <div className="LandingPage-section">
          <button onClick={handleBack}>Back</button>
          <Leaderboard />
        </div>
      )}

      {showSection === "quiz" && (
        <div className="LandingPage-section">
          <button onClick={handleBack}>Back</button>
          <Quiz />
        </div>
      )}

      {showSection === "resources" && (
        <div className="LandingPage-section">
          <button onClick={handleBack}>Back</button>
          <ul>
            <li>
              <a
                href="https://statesuniteddemocracy.org/priorities/election-protection/"
                target="_blank"
                rel="noopener noreferrer"
              >
                States United Democracy Center: Election Protection
              </a>
            </li>
            <li>
              <a
                href="https://www.brennancenter.org/our-work/research-reports/digital-disinformation-and-vote-suppression"
                target="_blank"
                rel="noopener noreferrer"
              >
                Brennan Center for Justice: Digital Disinformation and Vote
                Suppression
              </a>
            </li>
            <li>
              <a
                href="https://www.safewise.com/state-of-safety/"
                target="_blank"
                rel="noopener noreferrer"
              >
                SafeWise: State of Safety
              </a>
            </li>
            <li>
              <a
                href="https://projects.fivethirtyeight.com/polls/president-general/2024/"
                target="_blank"
                rel="noopener noreferrer"
              >
                FiveThirtyEight: 2024 Presidential Polls
              </a>
            </li>
            <li>
              <a
                href="https://www.apa.org/news/press/releases/2019/08/fear-mass-shooting"
                target="_blank"
                rel="noopener noreferrer"
              >
                APA: Fear of Mass Shootings
              </a>
            </li>
            <li>
              <a
                href="https://electiontaskforce.org/elections-dashboard/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Election Task Force: Elections Dashboard
              </a>
            </li>
            <li>
              <a
                href="https://www.rockthevote.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rock the Vote
              </a>
            </li>
            <li>
              <a
                href="https://www.lgbtmap.org/democracy-maps/laws_protecting_election_officials_against_threats"
                target="_blank"
                rel="noopener noreferrer"
              >
                LGBTQ MAP: Laws Protecting Election Officials Against Threats
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default LandingPage;
