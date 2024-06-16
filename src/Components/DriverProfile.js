import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Profile from "./Profile";
import handshake from '../assets/Decoration/handshake-2009195_1280.png'
import volunteerHelp from '../assets/Decoration/volunteer driver pexels-rdne-6647036.jpg'
import helpPassenger from '../assets/Decoration/volunteer pexels-rdne-6647037.jpg'
import volunteer from '../assets/Decoration/volunteer pexels-liza-summer-6348129.jpg'
import driver2 from '../assets/Decoration/driver pexels-element5-1051071.jpg'


function DriverProfile({setProfile}) {
    const navigate = useNavigate();
    const [otherInfo, setOtherInfo] = useState("")
    const [custname, setCustName] = useState("")
    const [email, setEmail] = useState("")
    const [vehicleType, setVehicleType] = useState("")
    const [vehicleColor, setVehicleColor] = useState("")
    const [vehicleMake, setVehicleMake] = useState("")
    const [vehicleModel, setVehicleModel] = useState("")
    const [yearsOfExperience, setYearsOfExperience] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [languagePreference, setLanguagePreference] = useState("")
    const [accessibilityNeeds, setAccessibilityNeeds] = useState("")
    const [availability, setAvailability] = useState({
            monday: false,
            tuesday: false,
            wednesday: false,
            thursday: false,
            friday: false,
            saturday: false,
            sunday: false,
        })
    const [times, setTimes] = useState("")

    // const [selectedOptions, setSelectedOptions] = useState([]);

    const handleInputChange = (event) => {
        const selected = Array.from(event.target.selectedOptions, option => option.value);
        setTimes(selected);
        Profile({custname, email, phoneNumber, languagePreference, yearsOfExperience, availability, times, accessibilityNeeds, vehicleColor, vehicleMake, vehicleModel, vehicleType,  otherInfo})

      };

      const handleSubmit = (event) => {
        navigate('/login')
    }

    return (
    <div className="DriverSignup-container">
        <div className="Form-header">
            <h2>Driver Sign Up</h2>
            <img className="img-rider-header" src={driver2} alt="person driving car" />
            
        </div>

        <form className="signup-form " onSubmit={handleSubmit}>
            <label>
            Name:
            <input type="text" name="custname" onChange={(e) => setCustName(e.target.value)} />
        </label>
        <label>
            Email:
            <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
                Vehicle Type:
                <select name="vehicleType" value={vehicleType} onChange={(e) => setVehicleType(e.target.value)}>
                    <option value="car">Car</option>
                    <option value="van">Van</option>
                    <option value="suv">SUV</option>
                    <option value="truck">Truck</option>
                </select>
            </label>
            <label>
                Vehicle Color:
                <input type="text" name="vehicleColor" value={vehicleColor} onChange={(e) => setVehicleColor(e.target.value)} />
            </label> <br/>
            <label>
                Vehicle Make:
                <input type="text" name="vehicleMake" value={vehicleMake} onChange={(e) => setVehicleMake(e.target.value)} />
            </label> <br/>
            <label>
                Vehicle Model:
                <input type="text" name="vehicleModel" value={vehicleModel} onChange={(e) => setVehicleModel(e.target.value)} />
            </label> <br/>
            <label>
                Years of Experience:
                <input type="number" name="yearsofexperience" value={yearsOfExperience} onChange={(e) => setYearsOfExperience(e.target.value)} />
            </label> <br/>
            <label>
                Phone Number: 
                <input type="tel" name="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
            </label><br/>
            <label>
                Language Preference:
                <select name="languagePreference" value={languagePreference} onChange={(e) => setLanguagePreference(e.target.value)}>
                    <option value="English">English</option>
                    <option value="Spanish">Spanish</option>
                    <option value="French">French</option>
                    <option value="Arabic">Arabic</option>
                    <option value="Urdu">Urdu</option>
                </select>
            </label><br/>
            <label>
                Can you accommodate accessibility needs?
                <select name="accommodationNeed" value={accessibilityNeeds} onChange={(e) => setAccessibilityNeeds(e.target.value)}>
                    <option value="canAccommodate">Yes</option>
                    <option value="cannotAccommodate">No</option>
                </select>
            </label> <br/>
            <label>
                Availability:
                <label>
                    <input type="checkbox" name="monday" checked={availability.monday} onChange={(e) => setAvailability(e.target.value)} />
                    Monday
                </label>
                <label>
                    <input type="checkbox" name="tuesday" checked={availability.tuesday} onChange={handleInputChange} />
                    Tuesday
                </label>
                <label>
                <label>
                    <input type="checkbox" name="wednesday" checked={availability.wednesday} onChange={handleInputChange} />
                    Wednesday
                </label>
                <label>
                    <input type="checkbox" name="thursday" checked={availability.thursday} onChange={handleInputChange} />
                    Thursday
                </label>
                <label>
                    <input type="checkbox" name="friday" checked={availability.friday} onChange={handleInputChange} />
                    Friday
                </label>
                <label>
                    <input type="checkbox" name="saturday" checked={availability.saturday} onChange={handleInputChange} />
                    Saturday
                </label>
                <label>
                    <input type="checkbox" name="sunday" checked={availability.sunday} onChange={handleInputChange} />
                    Sunday
                </label>
                    {/* Times: */}
                    {/* <input type="text" name="times" value={availability.times} onChange={(e) => setCustName(e.target.value)} /> */}
                </label>
            </label><br/>
            Choose times:

            <label for="time1">08:00 AM
                <input type="checkbox" id="time2" name="times" value="09:00"/>
            </label>
            <label for="time2">09:00 AM
                <input type="checkbox" id="time3" name="times" value="10:00"/>
                </label>
            <label for="time3">10:00 AM
                <input type="checkbox" id="time4" name="times" value="11:00"/>
                </label>
            <label for="time4">11:00 AM
                <input type="checkbox" id="time5" name="times" value="12:00"/>
                </label>
            <label for="time5">12:00 PM
                <input type="checkbox" id="time6" name="times" value="13:00"/>
                </label>
            <label for="time6">1:00 PM
                <input type="checkbox" id="time7" name="times" value="14:00"/>
                </label>
            <label for="time7">2:00 PM
                <input type="checkbox" id="time8" name="times" value="15:00"/>
                </label>
            <label for="time6">3:00 PM
                <input type="checkbox" id="time9" name="times" value="16:00"/>
                </label>
            <label for="time7">4:00 PM
                <input type="checkbox" id="time10" name="times" value="17:00"/>
                </label>
            <label for="time8">5:00 PM
                <input type="checkbox" id="time11" name="times" value="18:00"/>
                </label>
            <label for="time7">6:00 PM
                <input type="checkbox" id="time12" name="times" value="19:00"/>
            </label>
            <label>
            Anything else you need to indicate, please do so here:
                <input type="text" name="otherInfo" onChange={(e) => setOtherInfo(e.target.value)} />
            </label> <br/> 

            <button type="submit">Submit</button>
     </form>
     <div className="img-rider-container">
     <img className="img-rider" src={handshake} alt="handshake wordart" />
     <img className="img-rider" src={volunteerHelp} alt="driver getting walker" />
     <img className="img-rider3" src={volunteer} alt="volunteer badge" />
     <img className="img-rider" src={helpPassenger} alt="driver helping passenger" />
     </div>
    </div>
    );

};

export default DriverProfile;