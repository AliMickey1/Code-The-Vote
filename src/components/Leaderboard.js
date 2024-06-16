import React, { useState, useEffect } from 'react';
import leaderboardData from '../Data/LeaderboardData';
import '../App.css';  // Ensure this path is correct
import { Fireworks } from 'fireworks-js';
import participationBadge from '../assets/participation-badge.png.webp'; // Adjust the path as necessary
import quizMaster from '../assets/quiz-master.png'; // Adjust the path as necessary
import topContributor from '../assets/top-contributor.png'; // Adjust the path as necessary

const Leaderboard = () => {
  const [riders, setRiders] = useState([]);
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    // Simulate fetching data
    setRiders(leaderboardData.riders.slice(0, 5));
    setDrivers(leaderboardData.drivers.slice(0, 5));

    // Firework effect
    const container = document.getElementById('fireworks-container');
    if (container) {
      const fireworks = new Fireworks(container, { 
        speed: 3,
        particles: 100,
        explosion: 5,
        intensity: 20
      });
      fireworks.start();
      
      return () => fireworks.stop();
    }
  }, []);

  return (
    <div className="leaderboard-container">
      <h2>Rider Leaderboard</h2>
      <ul>
        {riders.map((rider) => (
          <li key={rider.id} className="leaderboard-item">
            <p><strong>Name:</strong> {rider.name}</p>
            <p><strong>Location:</strong> {rider.location}</p>
            <p><strong>Age:</strong> {rider.age}</p>
            <p><strong>Participation Badge:</strong> {rider.participationBadge}</p>
            <p><strong>Quiz Master:</strong> {rider.quizMaster}</p>
            <p><strong>Top Contributor:</strong> {rider.topContributor}</p>
            <div className="badges">
              <img src={participationBadge} alt="Participation Badge" className="badge-icon" />
              <img src={quizMaster} alt="Quiz Master" className="badge-icon" />
              <img src={topContributor} alt="Top Contributor" className="badge-icon" />
            </div>
          </li>
        ))}
      </ul>

      <h2>Driver Leaderboard</h2>
      <ul>
        {drivers.map((driver) => (
          <li key={driver.id} className="leaderboard-item">
            <p><strong>Name:</strong> {driver.name}</p>
            <p><strong>Location:</strong> {driver.location}</p>
            <p><strong>Age:</strong> {driver.age}</p>
            <p><strong>Participation Badge:</strong> {driver.participationBadge}</p>
            <p><strong>Quiz Master:</strong> {driver.quizMaster}</p>
            <p><strong>Top Contributor:</strong> {driver.topContributor}</p>
            <div className="badges">
              <img src={participationBadge} alt="Participation Badge" className="badge-icon" />
              <img src={quizMaster} alt="Quiz Master" className="badge-icon" />
              <img src={topContributor} alt="Top Contributor" className="badge-icon" />
            </div>
          </li>
        ))}
      </ul>
      <div id="fireworks-container" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}></div>
    </div>
  );
};

export default Leaderboard;
