// src/pages/LandingPage.js
import React from 'react';
import '../App.css';
import Quiz from '../components/Quiz';
import Leaderboard from '../components/Leaderboard';

function LandingPage() {
  return (
    <div className="LandingPage">
      <header className="LandingPage-header">
        <h1>Welcome to Car-Polling</h1>
        <p>Engage in protecting election integrity by participating in our car-pooling initiative.</p>
      </header>
      <div className="LandingPage-content">
        <section className="LandingPage-section">
          <h2>Car-Polling Quiz</h2>
          <Quiz />
        </section>
        <section className="LandingPage-section">
          <h2>Leaderboard</h2>
          <Leaderboard />
        </section>
      </div>
    </div>
  );
}

export default LandingPage;
