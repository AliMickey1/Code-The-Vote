import React, { useState } from "react";

function VolunteerDriver() {
  const [stateOfResidence, setStateOfResidence] = useState("");
  const [vehicleMake, setVehicleMake] = useState("");
  const [vehicleModel, setVehicleModel] = useState("");
  const [vehicleColor, setVehicleColor] = useState("");
  const [maxPassengers, setMaxPassengers] = useState("");
  const [accommodations, setAccommodations] = useState({
    hearingImpairment: false,
    visualImpairment: false,
    physicalImpairment: false,
    wheelchairAccess: false,
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Form submitted:", {
      stateOfResidence,
      vehicleMake,
      vehicleModel,
      vehicleColor,
      maxPassengers,
      accommodations,
    });

    // Handle any form processing logic here

    // Mark the form as submitted
    setFormSubmitted(true);
  };

  const handleAccommodationChange = (e) => {
    const { name, checked } = e.target;
    setAccommodations((prevAccommodations) => ({
      ...prevAccommodations,
      [name]: checked,
    }));
  };

  const states = [
    { abbreviation: "", name: "--Select state--" },
    { abbreviation: "AL", name: "Alabama" },
    { abbreviation: "AK", name: "Alaska" },
    // Add more states as needed
  ];

  // Redirect function
  if (formSubmitted) {
    window.location.href = "http://localhost:3000/Ride-Selection";
  }

  return (
    <div className="form-container">
      <form className="volunteer-driver-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="stateOfResidence">State of Residence:</label>
          <select
            id="stateOfResidence"
            className="input"
            value={stateOfResidence}
            onChange={(e) => setStateOfResidence(e.target.value)}
            required
          >
            {states.map((state) => (
              <option key={state.abbreviation} value={state.abbreviation}>
                {state.name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Vehicle Make:</label>
          <input
            type="text"
            className="input"
            value={vehicleMake}
            onChange={(e) => setVehicleMake(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Vehicle Model:</label>
          <input
            type="text"
            className="input"
            value={vehicleModel}
            onChange={(e) => setVehicleModel(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Vehicle Color:</label>
          <input
            type="text"
            className="input"
            value={vehicleColor}
            onChange={(e) => setVehicleColor(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Maximum Number of Passengers:</label>
          <input
            type="number"
            className="input"
            value={maxPassengers}
            onChange={(e) => setMaxPassengers(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>
            Can you accommodate passengers with any of the following
            disabilities?
          </label>
          <div className="checkbox-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="hearingImpairment"
                checked={accommodations.hearingImpairment}
                onChange={handleAccommodationChange}
              />
              Hearing Impairment
            </label>
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="visualImpairment"
                checked={accommodations.visualImpairment}
                onChange={handleAccommodationChange}
              />
              Visual Impairment
            </label>
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="physicalImpairment"
                checked={accommodations.physicalImpairment}
                onChange={handleAccommodationChange}
              />
              Physical Impairment
            </label>
            <label className="checkbox-label">
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
          Submit
        </button>
      </form>
    </div>
  );
}

export default VolunteerDriver;
