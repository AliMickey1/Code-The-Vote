// src/components/Leaderboard.js
import React, { useEffect, useState } from 'react';

const Leaderboard = () => {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    // Mock data for leaderboard
    const data = [
      { id: 1, name: 'Driver 1', points: 100 },
      { id: 2, name: 'Driver 2', points: 90 },
      { id: 3, name: 'Driver 3', points: 80 }
    ];
    setDrivers(data);
  }, []);

  return (
    <div>
      <h2>Driver Leaderboard</h2>
      <ul>
        {drivers.map((driver) => (
          <li key={driver.id}>
            {driver.name}: {driver.points} points
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
