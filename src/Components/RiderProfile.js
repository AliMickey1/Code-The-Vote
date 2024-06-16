import { useState } from "react";
import Profile from "./Profile";
import LoginButton from "./LoginButton";
import { useNavigate } from "react-router-dom";
import passport from '../assets/Decoration/passport-8621284_1280.png'
import accessible from '../assets/Decoration/communication-3253476_1280.png'
import rider from '../assets/Decoration/pexels-olly-3783081.jpg'
import polling from '../assets/Decoration/polling-station-2643466_1280.jpg'
import iVoted from '../assets/Decoration/parker-johnson-v0OWc_skg0g-unsplash.jpg'




function RiderProfile({setProfile}) {
  const navigate = useNavigate();
        
        const [custname, setCustName] = useState("")
        const [email, setEmail] = useState("")
        const [phoneNumber, setPhoneNumber] = useState("")
        const [languagePreference, setLanguagePreference] = useState("")
        const [accessibilityNeeds, setAccessibilityNeeds] = useState("")
        const [transportationNeeds, setTransportationNeeds] = useState("")
        const [otherInfo, setOtherInfo] = useState("")
   

    const handleSubmit = (event) => {
        navigate('/login')
    }

    const handleChange = (event) => {
        if (event.target.checked) {
          setTransportationNeeds(prev => [...prev, event.target.value]);
        } else {
          setTransportationNeeds(prev => prev.filter(option => option !== event.target.value));
        }
        Profile({custname, email, phoneNumber, languagePreference, accessibilityNeeds, transportationNeeds, otherInfo})

      };

return (
    <div className="RiderSignup-container">
        <div className="Form-header">
            <h2>Rider Sign Up</h2>
            <img className="img-rider-header" src={rider} alt="passenger in car" />

        </div>
        <form className="signup-form" onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" name="custname" onChange={(e) => setCustName(e.target.value)} />
            </label>
            <label>
                Email:
                <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label>
                Phone Number: 
                    <input type="tel" name="phoneNumber" onChange={(e) => setPhoneNumber(e.target.value)}  />
        </label><br/>
        <label>
            Language Preference:
            <select name="languagePreference" onChange={(e) => setLanguagePreference(e.target.value)} >
                <option value="English">English</option>
                <option value="Spanish">Spanish</option>
                <option value="French">French</option>
                <option value="Arabic">Arabic</option>
                <option value="Urdu">Urdu</option>
            </select>
        </label><br/>
        <label>
            What are your transporation needs?

                <label>
                    <input type="checkbox" value="vote" onChange={handleChange} />
                    I need to go to my voting location to vote on election day.
                </label>
            
                <label>
                    <input type="checkbox" value="register" onChange={handleChange} />
                    I need to go to my voting location to register to vote.
                </label>
                <label>
                    <input type="checkbox" value="idDocs" onChange={handleChange} />
                    I need to pickup ID documents.
                </label>
                <label>
                    <input type="checkbox" value="other" onChange={handleChange} />
                    I have other voting related transporation needs not listed.
                </label>
            </label><br/>
                <label>
                    Do you have accessibility needs? If so, please indicate them here.
                    <input type="text" name="accessibility" onChange={(e) => setAccessibilityNeeds(e.target.value)} />
                </label> <br/>
                <label>
                    Anything else you need to indicate, please do so here:
                    <input type="text" name="otherInfo" onChange={(e) => setOtherInfo(e.target.value)} />
                </label> <br/>        
                

                <button type="submit">Submit</button>

     </form>
     <div className="img-rider-container">
        <img className="img-rider" src={polling} alt="polling place" />
        <img className="img-rider2" src={passport} alt="passport image" />
        <img className="img-rider" src={accessible} alt="passport image" />
        <img className="img-rider2" src={iVoted} alt="voted sticker" />
     </div>

    </div>
    
);
};


export default RiderProfile;