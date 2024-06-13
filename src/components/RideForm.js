// src/components/RideForm.js
import React, { useState } from 'react';

const RideForm = () => {
  const [pickupLocation, setPickupLocation] = useState('');
  const [destination, setDestination] = useState('');
  const [pickupTime, setPickupTime] = useState('');
  const [seatsAvailable, setSeatsAvailable] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic to handle ride creation
    console.log('Ride created:', {
      pickupLocation,
      destination,
      pickupTime,
      seatsAvailable
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Pickup Location:</label>
        <input
          type="text"
          value={pickupLocation}
          onChange={(e) => setPickupLocation(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Destination:</label>
        <input
          type="text"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Pickup Time:</label>
        <input
          type="datetime-local"
          value={pickupTime}
          onChange={(e) => setPickupTime(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Seats Available:</label>
        <input
          type="number"
          value={seatsAvailable}
          onChange={(e) => setSeatsAvailable(e.target.value)}
          required
        />
      </div>
      <button type="submit">Create Ride</button>
    </form>
  );
};

export default RideForm;
