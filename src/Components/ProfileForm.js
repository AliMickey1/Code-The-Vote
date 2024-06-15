import React, { useState } from 'react';

function ProfileForm() {
    const [profile, setProfile] = useState({
        vehicleType: '',
        vehicleColor: '',
        vehicleMake: '',
        vehicleModel: '',
        yearsOfExperience: '',
        contactInformation: '',
        languagePreference: '',
        accessibilityNeeds: '',
        location: '',
        ratings: '',
        availability: {
            days: {
                monday: false,
                tuesday: false,
                wednesday: false,
                thursday: false,
                friday: false,
                saturday: false,
                sunday: false,
            },
            times: '',
        },
        hoursPerDayWorked: '',
        totalHoursDriven: '',
        profileType: 'driver', // default to 'driver'
    });

    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        if (Object.keys(profile.availability.days).includes(name)) {
            setProfile(prevProfile => ({
                ...prevProfile,
                availability: {
                    ...prevProfile.availability,
                    days: {
                        ...prevProfile.availability.days,
                        [name]: value,
                    },
                },
            }));
        } else {
            setProfile({
                ...profile,
                [name]: value
            });
        }
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(profile);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Profile Type:
                <select name="profileType" value={profile.profileType} onChange={handleInputChange}>
                    <option value="driver">Driver</option>
                    <option value="rider">Rider</option>
                </select>
            </label><br/>
            <label>
                Vehicle Type:
                <select name="vehicleType" value={profile.vehicleType} onChange={handleInputChange}>
                    <option value="car">Car</option>
                    <option value="van">Van</option>
                    <option value="suv">SUV</option>
                    <option value="truck">Truck</option>
                </select>
            </label><br/>
            <label>
                Vehicle Color:
                <input type="text" name="vehicleColor" value={profile.vehicleColor} onChange={handleInputChange} />
            </label> <br/>
            <label>
                Vehicle Make:
                <input type="text" name="vehicleMake" value={profile.vehicleMake} onChange={handleInputChange} />
            </label> <br/>
            <label>
                Vehicle Model:
                <input type="text" name="vehicleModel" value={profile.vehicleModel} onChange={handleInputChange} />
            </label> <br/>
            <label>
                Years of Experience:
                <input type="text" name="yearsofexperience" value={profile.yearsOfExperience} onChange={handleInputChange} />
            </label> <br/>
            <label>
                Phone Number: 
                <input type="tel" name="phoneNumber" value={profile.phoneNumber} onChange={handleInputChange} />
            </label><br/>
            <label>
                Language Preference:
                <select name="languagePreference" value={profile.languagePreference} onChange={handleInputChange}>
                    <option value="English">English</option>
                    <option value="Spanish">Spanish</option>
                    <option value="French">French</option>
                    <option value="Arabic">Arabic</option>
                    <option value="Urdu">Urdu</option>
                </select>
            </label><br/>
            <label>
                Can you accommodate accessibility needs?
                <select name="accommodationNeed" value={profile.accommodationNeed} onChange={handleInputChange}>
                    <option value="canAccommodate">Yes</option>
                    <option value="cannotAccommodate">No</option>
                </select>
            </label> <br/>
            <label>
                Availability:
                <label>
                    <input type="checkbox" name="monday" checked={profile.availability.days.monday} onChange={handleInputChange} />
                    Monday
                </label>
                <label>
                    <input type="checkbox" name="monday" checked={profile.availability.days.monday} onChange={handleInputChange} />
                    Tuesday
                </label>
                <label>
                <label>
                    <input type="checkbox" name="monday" checked={profile.availability.days.monday} onChange={handleInputChange} />
                    Wednesday
                </label>
                <label>
                    <input type="checkbox" name="monday" checked={profile.availability.days.monday} onChange={handleInputChange} />
                    Thursday
                </label>
                <label>
                    <input type="checkbox" name="monday" checked={profile.availability.days.monday} onChange={handleInputChange} />
                    Friday
                </label>
                <label>
                    <input type="checkbox" name="monday" checked={profile.availability.days.monday} onChange={handleInputChange} />
                    Saturday
                </label>
                <label>
                    <input type="checkbox" name="monday" checked={profile.availability.days.monday} onChange={handleInputChange} />
                    Sunday
                </label>
                    Times:
                    <input type="text" name="times" value={profile.availability.times} onChange={handleInputChange} />
                </label>
            </label><br/>
            <input type="submit" value="Submit" />
        </form>
    );
}

export default ProfileForm;
