import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import ProfileForm from './ProfileForm';
import participation from '../assets/participation-badge.png.webp'
import quiz from '../assets/quiz-master.png'

function Profile({Profile}) {
    const { user } = useAuth0();

    if (!user) {
        return <div>Loading...</div>;
    }
    else if(user.type == null) {
      <ProfileForm />
    }

    return (
        <div class="profile-container">
            <div class="profile-picture">
                <img src={user.picture} alt={user.name} />
            </div>
            <div class="username" id="username">
                <h2>{user.name}</h2>
            </div>
            <div className='contactInfo'>
                <h3>Contact Information:</h3>
                <p>{user.email}</p>
                <p>123-456-7890</p>
            </div>
            <div className='preferences'>
                <h3>Preferences:</h3>
                <p>Language preference(s): </p>
                <ul class='centered'>
                    <li>English</li>
                    <p>Transportation Needs: </p>
                    <li>I need to go to my voting location to vote on election day.</li>
                    <li>I need to go to my voting location to register to vote.</li>
                    <p>Accessibility Needs: </p>
                    <li>N/A</li>
                    <p>Any other information?</p>
                    <li>None</li>
                </ul>
            </div>
            <div class="progress-bar">
                <div class="progress" id="progress"></div>
            </div>

            <div className='badge-container'>
                <img src={quiz} alt='quiz badge' />
                <img className='imgReduce' src={participation} alt='participation badge' />
            </div>
            
          


            {/* <ProfileForm /> */}
        </div>
    );
}

export default Profile;