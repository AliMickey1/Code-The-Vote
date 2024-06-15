import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import DriverProfile from './DriverProfile';
import RiderProfile from './RiderProfile';

function Profile() {
    const [selectedOption, setSelectedOption] = useState('driver');
    const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
    

      
    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    }

    if (!isAuthenticated) {
        return <button onClick={loginWithRedirect}>Log In</button>;
    }

    return (
      isAuthenticated && (
        <div className="profile">
            <img src={user.picture} alt={user?.name} />
             <h2>{user?.name}</h2>
             <ul>
                 {Object.keys(user).map((objKey, i) => <li key={i}>{objKey}: {user[objKey]}</li>)}
             </ul>
            <button onClick={logout}>Log Out</button>

            <select value={selectedOption} onChange={handleSelectChange}>
                <option value="driver">Driver</option>
                <option value="rider">Rider</option>
            </select>

            {/* {selectedOption === 'driver' ? <DriverProfile /> : <RiderProfile />} */}
        </div>
        
    )
    )
}

export default Profile;
