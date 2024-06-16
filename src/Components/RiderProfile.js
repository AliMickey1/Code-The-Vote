import { useState } from "react";
import Profile from "./Profile";

function RiderProfile() {

  const [profile, setProfile] = useState({
        contactInformation: '',
        languagePreference: '',
        accessibilityNeeds: '',
        location: '',
        profileType: 'rider', 
    });

    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    }

    const handleSubmit = (event) => {
        <Profile />
    }

return (
    <div>
<form>
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
            Do you have accessibility needs? If so, please indicate them here.
            <input type="text" name="accessibility" value={profile.accessibilityNeeds} onChange={handleInputChange} />
        </label> <br/>
        
        <input type="submit" value="Submit" />
     </form>
    </div>
);
};


export default RiderProfile;