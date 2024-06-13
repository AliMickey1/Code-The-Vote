import React, {useState} from "react";
import axios from "axios";
import { toBeRequired } from "@testing-library/jest-dom/matchers";

const RideForm = () => {
      const [pickupLocation, setPickupLocation] = useState('');
      const [destination, setDestination] = useState('');
      const [pickupTime, setPickupTime] = useState('');
      const [seatsAvailable, setSeatsAvailable] = useState('');


      const handleSubmit = async (event) => {
          event.preventDefault();

          const newRide = {
            driver_id: 1, //Replace with actual driver ID
            pickup_location: pickupLocation,
            destination: destination,
            pickup_time: pickupTime,
            seats_available: seatsAvailable,
            status: "available"
          };
          try {
            const response = await axios.post('http://localhost:3000/rides', newRide);
            console.log('Ride created:', response.data);

          }catch (error) {
            console.error(error);
          }
      };

      return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Pickup Location:</label>
                <input type="text" value={pickupLocation} onChange={(e) => setPickupLocation(e.target.value)}></input>
            </div>
            <div>
                <label>Destination:</label>
                <input type="text" value={destination} onChange={(e) => setDestination(e.target.value)}></input>
            </div>
            <div>
                <label>Pickup Time:</label>
            <input type="datetime-local" value={pickupTime} onChange={(e) => setPickupTime(e.target.value)}></input>
            </div>
            <div>
                <label>Seats Available:</label>
                <input type="number" value={seatsAvailable} onChange={(e) => setSeatsAvailable(e.target.value)}></input>
            </div>
            <button type="submit">Create Ride</button>
        </form>
      )
};

export default RideForm;