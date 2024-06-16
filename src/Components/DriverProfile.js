// // Define a constructor function for a VolunteerDriver
// function DriverProfile(name, age, profileType, email, vehicleType, vehicleColor, vehicleMake, vehicleModel, rating, location, contact, language, accessibility, yearsOfExperience, availability, hoursPerDay, totalHoursDriven) {
//     this.name = name;
//     this.age = age;
//     this.email = email;
//     this.vehicleType = vehicleType;
//     this.vehicleColor = vehicleColor;
//     this.vehicleMake = vehicleMake;
//     this.vehicleModel = vehicleModel;
//     this.yearsOfExperience = yearsOfExperience;
//     this.contact = contact;
//     this.language = language;
//     this.accessibility = accessibility;
//     this.location = location;
//     this.rating = rating;
//     this.availability = availability; // This could be an array of available days
//     this.hoursPerDay = hoursPerDay;
//     this.totalHoursDriven = totalHoursDriven;
//     this.profileType = profileType;
// }

// // Create a new instance of VolunteerDriver
// var driver1 = new DriverProfile("John Doe", 35, "name@email.com", "driver", "white", "Car", "Chevy", "Malibu", 5, "Anywhere, USA", "123-456-7890", "Spanish", "none", 1, ["Monday", "Wednesday", "Friday"], 5);

// // Access properties of the driver
// console.log(driver1.name); // Outputs: John Doe
// console.log(driver1.availability); // Outputs: ["Monday", "Wednesday", "Friday"]
// console.log(driver1.totalHoursDriven); //Outputs 12 (3 days * 4 hours per day)

// export default DriverProfile;
import { useState } from "react";

function DriverProfile() {
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
    <div>
        <form>
            <label>
            Vehicle Type:
            <select name="vehicleType" value={profile.vehicleType} onChange={handleInputChange}>
                <option value="car">Car</option>
                <option value="van">Van</option>
                <option value="suv">SUV</option>
                <option value="truck">Truck</option>
            </select>
        </label>
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
                <input type="checkbox" name="tuesday" checked={profile.availability.days.tuesday} onChange={handleInputChange} />
                Tuesday
            </label>
            <label>
            <label>
                <input type="checkbox" name="wednesday" checked={profile.availability.days.wednesday} onChange={handleInputChange} />
                Wednesday
            </label>
            <label>
                <input type="checkbox" name="thursday" checked={profile.availability.days.thursday} onChange={handleInputChange} />
                Thursday
            </label>
            <label>
                <input type="checkbox" name="friday" checked={profile.availability.days.friday} onChange={handleInputChange} />
                Friday
            </label>
            <label>
                <input type="checkbox" name="saturday" checked={profile.availability.days.saturday} onChange={handleInputChange} />
                Saturday
            </label>
            <label>
                <input type="checkbox" name="sunday" checked={profile.availability.days.sunday} onChange={handleInputChange} />
                Sunday
            </label>
                Times:
                <input type="text" name="times" value={profile.availability.times} onChange={handleInputChange} />
            </label>
        </label><br/>
        <input type="submit" value="Submit" />
     </form>
    </div>
    );

};

export default DriverProfile;