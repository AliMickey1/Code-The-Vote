import React, { useState, useEffect } from 'react';
import leaderboardData from '../data/leaderboardData';
import '../App.css';  // Ensure this path is correct

const Leaderboard = () => {
  const [riders, setRiders] = useState([]);
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    // Simulate fetching data
    setRiders(leaderboardData.riders);
    setDrivers(leaderboardData.drivers);
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
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
