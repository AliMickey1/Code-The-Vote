import React, { useState } from "react";
import "../App.css";
import Profile from "../Components/Profile";

function SignUpPage() {
  const [verified, setVerified] = useState(false);
  const [role, setRole] = useState("");
  const [language, setLanguage] = useState("");
  const [agreed, setAgreed] = useState(false);

  const handleVerification = () => {
    setVerified(true);
  };

  const handleSubmit = () => {
    if (verified && role && agreed) {
      console.log("Redirecting to profile page...");
    } else {
      alert("Please complete all required fields.");
    }
  };

  return (
    <div className="SignUpPage">
      <header className="SignUpPage-header">
        <h1>Sign Up for Car-Polling</h1>
        <p>Please complete the following steps to sign up:</p>
      </header>

      <div className="SignUpPage-content">
        <section className="SignUpPage-section">
          <h2>1. ID Verification</h2>
          <button onClick={handleVerification}>Verify ID</button>
          {verified && <p>ID Verified ✓</p>}
        </section>

        <section className="SignUpPage-section">
          <h2>2. Role Selection</h2>
          <label>
            <input
              type="radio"
              name="role"
              value="rider"
              checked={role === "rider"}
              onChange={() => setRole("rider")}
            />
            Rider
          </label>
          <label>
            <input
              type="radio"
              name="role"
              value="volunteer"
              checked={role === "volunteer"}
              onChange={() => setRole("volunteer")}
            />
            Volunteer
          </label>
        </section>

        <section className="SignUpPage-section">
          <h2>3. Disclaimer</h2>
          <p>Include your disclaimer text here, e.g., rules of rides.</p>
          <label>
            <input
              type="checkbox"
              onChange={(e) => setAgreed(e.target.checked)}
            />
            I agree to the rules of rides
          </label>
        </section>

        <section className="SignUpPage-section">
          <h2>4. Language Selection</h2>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="">Select Language</option>
            <option value="english">English</option>
            <option value="spanish">Spanish</option>
          </select>
        </section>

        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default SignUpPage;
