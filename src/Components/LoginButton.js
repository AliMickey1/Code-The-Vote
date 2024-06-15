import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Button } from "react-bootstrap";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Button
      style={{
        backgroundColor: "#404C4A",
        color: "#FFFFFF",
        border: "none",
      }}
      onClick={() => loginWithRedirect()}
      id="qsLoginBtn"
      variant="primary"
      classname="login-btn"
    >
      Log In
    </Button>
  );
};
export default LoginButton;
