import React, {useEffect, useState} from "react";
import axios from "axios";



const RideList = () => {
     const [rides, setRides] = useState([]);
     const [userId] = useState(2);    //Exmaple ID, replace with the dynamic value


     useEffect(() => {
        const fetchRides = async () => {
            try {
            const reponse = await axios.get('http://localhost:3000/rides');
            setRides(response.data);
            }catch(error) {
               console.error('Error fetching rides:', error);
            }
        };
        fetchRides();
     }, []);


     const handleRideRequest = async (rideId) => {
        try {
        const response = await axios.post(`http://localhost:3000/rides/${rideId}/request`, { user_id: userId});
        console.log('Ride requested:', response.data);
        }catch(error) {
        console.error('Error requesting ride:', error);
        }
     };

     return (
        <div>
            <h2>Available Rides</h2>
            <ul>
                {rides.map((ride) => (
                   <li key={ride.id}>
                    {rides.pickup_location} to {ride.destination} at {ride.pickup_time}
                    ({ride.seats_available} seats available)
                    <button onClick={() => handleRideRequest(ride.id)}>Request Ride</button>
                   </li> 
                ))}

            </ul>
        </div>
     );
};


export default RideList;
