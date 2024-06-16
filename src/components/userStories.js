// src/pages/UserStories.js
import React from 'react';

const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    maxWidth: '800px',
    margin: '20px auto',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
  },
  header: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '20px'
  },
  section: {
    marginBottom: '20px',
    backgroundColor: '#fff',
    padding: '15px',
    borderRadius: '8px',
    border: '1px solid #ddd'
  },
  sectionHeader: {
    color: '#007BFF',
    marginBottom: '10px'
  },
  listItem: {
    marginBottom: '10px',
    color: '#555'
  }
};

const UserStories = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>User Stories</h1>
      
      <section style={styles.section}>
        <h2 style={styles.sectionHeader}>As a Rider:</h2>
        <ul>
          <li style={styles.listItem}>I want to sign up and create a profile, and I'd like to use the app to find rides to polling stations.</li>
          <li style={styles.listItem}>I need to view available rides with details about the driver, pickup location, and time so that I can choose conveniently.</li>
          <li style={styles.listItem}>It'll be helpful to be able to rate and review my driver, that way could help other users make informed decisions.</li>
          <li style={styles.listItem}>I would like to receive notifications about my ride status so that I'm informed about any potential changes or updates.</li>
        </ul>
      </section>
      
      <section style={styles.section}>
        <h2 style={styles.sectionHeader}>As a Driver:</h2>
        <ul>
          <li style={styles.listItem}>Sign up and verification processes help me to offer rides to send riders to the polling stations.</li>
          <li style={styles.listItem}>There are ways to create ride offers with details in order to let riders easily find and request my rides.</li>
          <li style={styles.listItem}>It's important for me to view and manage ride requests from riders to confirm their seats.</li>
          <li style={styles.listItem}>Rating services would allow me to review my riders (even if it's quite briefly) to share my experience and help build a trusted community.</li>
        </ul>
      </section>
      
      <section style={styles.section}>
        <h2 style={styles.sectionHeader}>As an App Administrator:</h2>
        <ul>
          <li style={styles.listItem}>One of my major duties is to verify drivers' identities and backgrounds to ensure the safety of riders.</li>
          <li style={styles.listItem}>I need to manage user profiles and rides to maintain the integrity of the app.</li>
          <li style={styles.listItem}>In sharing and exchanging views, it's critical to implement functions of receiving feedback and reviews to continuously improve the App's features and user experience.</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionHeader}>HR Admin Side:</h2>
        <ul>
          <li style={styles.listItem}>
            <strong>Insurance Coverage:</strong>
            <ul>
              <li style={styles.listItem}>Nonprofit-Owned Vehicles: If your nonprofit owns vehicles used by volunteer drivers, ensure you have a commercial auto insurance policy that covers liability, physical damage, and medical payments for occupants.</li>
            </ul>
          </li>
          <li style={styles.listItem}>
            <strong>Driver Screening:</strong>
            <ul>
              <li style={styles.listItem}>Conduct thorough background checks and review motor vehicle records for volunteer drivers. Ensure they meet specific qualifications and have a safe driving history.</li>
              <li style={styles.listItem}>Establish a regular driver screening process to prequalify potential drivers.</li>
            </ul>
          </li>
          <li style={styles.listItem}>
            <strong>Training and Orientation:</strong>
            <ul>
              <li style={styles.listItem}>Train volunteer drivers on safe driving practices, including defensive driving, passenger assistance, and sensitivity training.</li>
              <li style={styles.listItem}>Use a driver training checklist to cover essential topics and document training completion.</li>
            </ul>
          </li>
          <li style={styles.listItem}>
            <strong>Code of Conduct and Ethics:</strong>
            <ul>
              <li style={styles.listItem}>Create a written code of conduct for volunteer drivers. Address confidentiality, conflict of interest, and ethical behavior.</li>
              <li style={styles.listItem}>Emphasize compliance with traffic laws and avoiding controlled substances.</li>
            </ul>
          </li>
          <li style={styles.listItem}>
            <strong>Vehicle Maintenance:</strong>
            <ul>
              <li style={styles.listItem}>Inspect vehicles daily, especially if volunteers use their own cars. Regular maintenance ensures safety and reliability.</li>
              <li style={styles.listItem}>Encourage volunteers to maintain their vehicles properly.</li>
            </ul>
          </li>
          <li style={styles.listItem}>
            <strong>Incident Response Plan:</strong>
            <ul>
              <li style={styles.listItem}>Establish a plan for handling incidents, accidents, and collisions. Document procedures for managers at the scene of a collision and media relations.</li>
              <li style={styles.listItem}>Use incident reports to track and address any issues.</li>
            </ul>
          </li>
          <li style={styles.listItem}>
            <strong>Record Keeping:</strong>
            <ul>
              <li style={styles.listItem}>Maintain driver records, vehicle records, and rider information. Record trip requests, reports, and other relevant data.</li>
              <li style={styles.listItem}>Keep accurate records on riders, including trip purpose and demographics.</li>
            </ul>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default UserStories;
