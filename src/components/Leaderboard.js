// src/components/Leaderboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';  // Ensure this path is correct

const Leaderboard = () => {
  const [drivers, setDrivers] = useState([]);
  const [riders, setRiders] = useState([]);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response = await axios.get('https://hrf-asylum-be-b.herokuapp.com/cases');
        console.log('API response:', response.data);  // Debug: log the API response

        // Slice data for riders and drivers separately
        const riderData = response.data.slice(5, 11).map((item) => ({
          id: item.id,
          citizenship: item.citizenship
        }));

        const driverData = response.data.slice(14, 20).map((item) => ({
          id: item.id,
          citizenship: item.citizenship
        }));

        setRiders(riderData);
        setDrivers(driverData);
      } catch (error) {
        console.error('Error fetching leaderboard data:', error);
      }
    };

    fetchLeaderboard();
  }, []);

  return (
    <div className="leaderboard-container">
      <h2>Rider Leaderboard</h2>
      <ul>
        {riders.map((rider) => (
          <li key={rider.id} className="leaderboard-item">
            <p><strong>ID:</strong> {rider.id}</p>
            <p><strong>Citizenship:</strong> {rider.citizenship}</p>
          </li>
        ))}
      </ul>

      <h2>Driver Leaderboard</h2>
      <ul>
        {drivers.map((driver) => (
          <li key={driver.id} className="leaderboard-item">
            <p><strong>ID:</strong> {driver.id}</p>
            <p><strong>Citizenship:</strong> {driver.citizenship}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
