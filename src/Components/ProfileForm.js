import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';



function ProfileForm() {
    const [agreed, setAgreed] = useState(false);
    const [role, setRole] = useState("");
    const navigate = useNavigate();
 
        
        const handleSubmit = (role) => {
            if(!agreed) {
                alert("Please complete all required fields.")
              }
            else{
                navigate('/driverprofile');

                if (role === 'driver') {
                    navigate('/driverprofile');
                // } else if(role === 'rider') {
                }
                else{
                    navigate('/driverprofile');

                    navigate('/riderprofile');
                }
            }
          };

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
            I agree to the rules of rides...
          </label>
        </section>

        <section className="SignUpPage-section">
            <form onSubmit={handleSubmit}>

            <h2> Role Selection</h2>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="">Select a role</option>
                <option value="rider">Rider</option>
                <option value="driver">Driver</option>
            </select>

          <button type="submit">Submit</button>

    </form>

 
    </section>



</div>

    );

}




export default ProfileForm;
