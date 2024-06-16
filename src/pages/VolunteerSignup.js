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

  const SelectionRedirect = () => {
    window.location.href = "http://localhost:3000/Ride-Selection";
  };

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

    setStateOfResidence("");
    setVehicleMake("");
    setVehicleModel("");
    setVehicleColor("");
    setMaxPassengers("");
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

  const states = [
    { abbreviation: "", name: "--Select state--" },
    { abbreviation: "AL", name: "Alabama" },
    { abbreviation: "AK", name: "Alaska" },
    { abbreviation: "AZ", name: "Arizona" },
    { abbreviation: "AR", name: "Arkansas" },
    { abbreviation: "CA", name: "California" },
    { abbreviation: "CO", name: "Colorado" },
    { abbreviation: "CT", name: "Connecticut" },
    { abbreviation: "DE", name: "Delaware" },
    { abbreviation: "FL", name: "Florida" },
    { abbreviation: "GA", name: "Georgia" },
    { abbreviation: "HI", name: "Hawaii" },
    { abbreviation: "ID", name: "Idaho" },
    { abbreviation: "IL", name: "Illinois" },
    { abbreviation: "IN", name: "Indiana" },
    { abbreviation: "IA", name: "Iowa" },
    { abbreviation: "KS", name: "Kansas" },
    { abbreviation: "KY", name: "Kentucky" },
    { abbreviation: "LA", name: "Louisiana" },
    { abbreviation: "ME", name: "Maine" },
    { abbreviation: "MD", name: "Maryland" },
    { abbreviation: "MA", name: "Massachusetts" },
    { abbreviation: "MI", name: "Michigan" },
    { abbreviation: "MN", name: "Minnesota" },
    { abbreviation: "MS", name: "Mississippi" },
    { abbreviation: "MO", name: "Missouri" },
    { abbreviation: "MT", name: "Montana" },
    { abbreviation: "NE", name: "Nebraska" },
    { abbreviation: "NV", name: "Nevada" },
    { abbreviation: "NH", name: "New Hampshire" },
    { abbreviation: "NJ", name: "New Jersey" },
    { abbreviation: "NM", name: "New Mexico" },
    { abbreviation: "NY", name: "New York" },
    { abbreviation: "NC", name: "North Carolina" },
    { abbreviation: "ND", name: "North Dakota" },
    { abbreviation: "OH", name: "Ohio" },
    { abbreviation: "OK", name: "Oklahoma" },
    { abbreviation: "OR", name: "Oregon" },
    { abbreviation: "PA", name: "Pennsylvania" },
    { abbreviation: "RI", name: "Rhode Island" },
    { abbreviation: "SC", name: "South Carolina" },
    { abbreviation: "SD", name: "South Dakota" },
    { abbreviation: "TN", name: "Tennessee" },
    { abbreviation: "TX", name: "Texas" },
    { abbreviation: "UT", name: "Utah" },
    { abbreviation: "VT", name: "Vermont" },
    { abbreviation: "VA", name: "Virginia" },
    { abbreviation: "WA", name: "Washington" },
    { abbreviation: "WV", name: "West Virginia" },
    { abbreviation: "WI", name: "Wisconsin" },
    { abbreviation: "WY", name: "Wyoming" },
  ];

  return (
    <div className="form-container">
      <form
        className="volunteer-driver-form"
        onSubmit={[handleSubmit, SelectionRedirect]}
      >
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
