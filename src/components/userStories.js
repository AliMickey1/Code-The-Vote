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
    </div>
  );
};

export default UserStories;
