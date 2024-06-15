import React, { useRef } from 'react';

function ProfileForm() {
    const nameRef = useRef();
    const bioRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Name:', nameRef.current.value);
        console.log('Bio:', bioRef.current.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Profile Type:
                <select id="profiletype" onchange="getProfileType();">
                    <option value="driver">Driver</option>
                    <option value="rider">Rider</option>
                </select>
            </label>
            <label>
                Name:
                <input type="dropdown"  />
            </label>
            <label>
                Bio:
                <textarea ref={bioRef} />
            </label>
            <input type="submit" value="Submit" />
        </form>
    );
}

export default ProfileForm;
