import React, { useState } from 'react';
import DriverProfile from './DriverProfile';
import RiderProfile from './RiderProfile';

function ProfileForm() {
    const [agreed, setAgreed] = useState(false);
    const [role, setRole] = useState("");
    // const [profile, setProfile] = useState({
    //     vehicleType: '',
    //     vehicleColor: '',
    //     vehicleMake: '',
    //     vehicleModel: '',
    //     yearsOfExperience: '',
    //     contactInformation: '',
    //     languagePreference: '',
    //     accessibilityNeeds: '',
    //     location: '',
    //     ratings: '',
    //     availability: {
    //         days: {
    //             monday: false,
    //             tuesday: false,
    //             wednesday: false,
    //             thursday: false,
    //             friday: false,
    //             saturday: false,
    //             sunday: false,
    //         },
    //         times: '',
    //     },
    //     hoursPerDayWorked: '',
    //     totalHoursDriven: '',
    //     profileType: 'driver', 
    // });



    // const handleInputChange = (event) => {
    //     const target = event.target;
    //     const value = target.type === 'checkbox' ? target.checked : target.value;
    //     const name = target.name;

    //     if (Object.keys(profile.availability.days).includes(name)) {
    //         setProfile(prevProfile => ({
    //             ...prevProfile,
    //             availability: {
    //                 ...prevProfile.availability,
    //                 days: {
    //                     ...prevProfile.availability.days,
    //                     [name]: value,
    //                 },
    //             },
    //         }));
    //     } else {
    //         setProfile({
    //             ...profile,
    //             [name]: value
    //         });
    //     }
    // }



    const handleSubmit = (event) => {
        event.preventDefault();

    }

    return (
        <div className="SignUpPage-header">
        <h1>Sign Up for Car-Polling</h1>
        <p>Please complete the following steps to sign up:</p>

        {/* Disclaimer */}
        <section className="SignUpPage-section">
          <h2>Disclaimer</h2>
          <p>Disclaimer....rules of rides.</p>
          <label>
            <input
              type="checkbox"
              onChange={(e) => setAgreed(e.target.checked)}
            />
            I agree to the rules of rides
          </label>
        </section>

        {/* <form onSubmit={handleSubmit}> */}
            <section className="SignUpPage-section">
            <h2>2. Role Selection</h2>
            <label>
                <input
                type="radio"
                name="role"
                value="rider"
                checked={role === "rider"}
                onChange={() => setRole("rider")}
                />
                Rider
            </label>
            <label>
                <input
                type="radio"
                name="role"
                value="driver"
                checked={role=== "driver"}
                onChange={() => setRole("driver")}/>
             Driver
            </label>
         
 
    </section>
        if(role === 'driver'){
             <DriverProfile /> 
        }
        else{
            <RiderProfile />
        }
{/* </form>    */}
</div>
    );
}




export default ProfileForm;
