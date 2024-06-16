import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import ProfileForm from "./ProfileForm";

function Profile({ Profile }) {
  const { user } = useAuth0();

  if (!user) {
    return <div>Loading...</div>;
  } else if (user.type == null) {
    <ProfileForm />;
  }

  return (
    <div>
      <img src={user.picture} alt={user.name} />
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
}

export default Profile;
