import React from "react";

function VolunteerSelection() {
  const tablesData = [
    {
      name: "John Doe",
      passengers: 2,
      pickupLocation: "Main Street",
      destination: "Park Avenue",
      specialNeeds: "None",
    },
    {
      name: "Jane Smith",
      passengers: 1,
      pickupLocation: "Broadway",
      destination: "Central Park",
      specialNeeds: "Wheelchair accessible",
    },
    {
      name: "Michael Johnson",
      passengers: 3,
      pickupLocation: "5th Avenue",
      destination: "Times Square",
      specialNeeds: "Hearing Impairment",
    },
  ];

  return (
    <div className="volunteer-selection-container">
      {tablesData.map((data, index) => (
        <div key={index} className="Selection-Table table-wrapper">
          <table className="table">
            <tbody>
              <tr>
                <td className="label">Name:</td>
                <td>{data.name}</td>
              </tr>
              <tr>
                <td className="label">Passengers:</td>
                <td>{data.passengers}</td>
              </tr>
              <tr>
                <td className="label">Pickup location:</td>
                <td>{data.pickupLocation}</td>
              </tr>
              <tr>
                <td className="label">Destination:</td>
                <td>{data.destination}</td>
              </tr>
              <tr>
                <td className="label">Special Needs:</td>
                <td>{data.specialNeeds}</td>
              </tr>
              <tr>
                <td colSpan="2">
                  <button className="accept-button">Accept Rider(s)</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}

export default VolunteerSelection;
