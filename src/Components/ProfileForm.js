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
                    // navigate('/driverprofile');
                // } else if(role === 'rider') {
                }
                else{
                    navigate('/driverprofile');

                    navigate('/riderprofile');
                }
            }
          };

          const handleDriverSignup = () => {
            if(!agreed) {
                alert("Please complete all required fields.")
              }
            else{
                navigate('/driverprofile');
            }
          };
        
          const handleRiderSignup = () => {
            if(!agreed) {
                alert("Please complete all required fields.")
              }
            else{
                navigate('/riderprofile');
            }
          };

    return (
        <div className="SignUpPage-header">
        <h1>Sign Up for Car-Polling</h1>
        <p>Please complete the following steps to sign up:</p>

        {/* Disclaimer */}
        <section className="SignUpPage-section">
          <h2>Disclaimer</h2>
            <p>This carpooling application is intended to facilitate transportation arrangements between willing users of the service. The application is not a transportation service provider, broker, or agent. It does not screen participating drivers or riders. Users are solely responsible for selecting the individuals with whom they travel. Users must make their own determinations as to the suitability of such individuals.
                By using this application, you acknowledge and agree that you are participating in the activities for which you use this application voluntarily, and you are solely responsible for your own conduct and interactions with other users of the application. The application assumes no responsibility or liability for any acts or omissions by you or other users of the application.
                This application makes no representations or warranties as to the conduct, compatibility, safety, or skill of users or their vehicles. You agree to take reasonable precautions in all interactions with other users, particularly if you decide to meet in person or use each other's vehicles. Your use of this application is at your own risk.
                You agree to release and indemnify this application from any and all liability associated with your use of the application or participation in any carpooling arrangement made through the application.
            </p>
          <label>
            <input
              type="checkbox"
              onChange={(e) => setAgreed(e.target.checked)}
            />
            By checking here, you acknowledge and agree to the disclaimer above. **Required**
          </label>
        </section>

        <section className="SignUpPage-section">
            <form onSubmit={handleSubmit}>

            <h2> Role Selection</h2>
            <div>
                <button className="button driver-button" onClick={handleDriverSignup}>
                    Driver Signup
                </button>
                <button className="button rider-button" onClick={handleRiderSignup}>
                    Rider Signup
                </button>
                </div>
 

    </form>

 
    </section>



</div>

    );

}




export default ProfileForm;
