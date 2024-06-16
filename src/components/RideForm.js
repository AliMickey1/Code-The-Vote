import React, { useState } from "react";

const RideForm = () => {
  const [pickupLocation, setPickupLocation] = useState("");
  const [destination, setDestination] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [seatsAvailable, setSeatsAvailable] = useState("");
  const [rideType, setRideType] = useState(""); // State for dropdown
  const [accommodations, setAccommodations] = useState({
    hearingImpairment: false,
    visualImpairment: false,
    physicalImpairment: false,
    wheelchairAccess: false,
  });
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic to handle ride creation
    console.log("Ride created:", {
      pickupLocation,
      destination,
      pickupTime,
      seatsAvailable,
      rideType,
      accommodations,
    });
    setSuccessMessage("Ride Created Successfully!");
    // Clear the form fields
    setPickupLocation("");
    setDestination("");
    setPickupTime("");
    setSeatsAvailable("");
    setRideType(""); // Reset dropdown to default value
    setAccommodations({
      hearingImpairment: false,
      visualImpairment: false,
      physicalImpairment: false,
      wheelchairAccess: false,
    });
  };

  const handleAccommodationChange = (e) => {
    const { name, checked } = e.target;
    setAccommodations((prevAccommodations) => ({
      ...prevAccommodations,
      [name]: checked,
    }));
  };

  return (
    <div className="form-container">
      <form className="ride-request-container" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="dropdown">Ride Needed For:</label>
          <select
            id="dropdown"
            className="input"
            value={rideType}
            onChange={(e) => setRideType(e.target.value)}
          >
            <option value="">--Please choose an option--</option>
            <option value="option1">Voting Assistance</option>
            <option value="option2">Voting Registration Assistance</option>
            <option value="option3">ID/Document Procurement</option>
          </select>
        </div>
        <div className="form-group">
          <label>Pickup Location:</label>
          <input
            type="text"
            className="input"
            value={pickupLocation}
            onChange={(e) => setPickupLocation(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Destination:</label>
          <input
            type="text"
            className="input"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Pickup Time:</label>
          <input
            type="datetime-local"
            className="input"
            value={pickupTime}
            onChange={(e) => setPickupTime(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Seats Needed:</label>
          <input
            type="number"
            className="input"
            value={seatsAvailable}
            onChange={(e) => setSeatsAvailable(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Do you require accommodation for any of the following?</label>
          <div className="checkbox-group">
            <label>
              <input
                type="checkbox"
                name="hearingImpairment"
                checked={accommodations.hearingImpairment}
                onChange={handleAccommodationChange}
              />
              Hearing Impairment
            </label>
            <label>
              <input
                type="checkbox"
                name="visualImpairment"
                checked={accommodations.visualImpairment}
                onChange={handleAccommodationChange}
              />
              Visual Impairment
            </label>
            <label>
              <input
                type="checkbox"
                name="physicalImpairment"
                checked={accommodations.physicalImpairment}
                onChange={handleAccommodationChange}
              />
              Physical Impairment
            </label>
            <label>
              <input
                type="checkbox"
                name="wheelchairAccess"
                checked={accommodations.wheelchairAccess}
                onChange={handleAccommodationChange}
              />
              Wheelchair Access
            </label>
          </div>
        </div>
        <button type="submit" className="button">
          Create Ride
        </button>
        {successMessage && <p>{successMessage}</p>}
      </form>
    </div>
  );
};

export default RideForm;
