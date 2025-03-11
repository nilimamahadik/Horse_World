"use client"

import React from 'react';
// import './profile-ui.css'; // Import the CSS file

const Page = () => {
  return (
    <div className="profile-container">
      {/* Blue Header */}
      <div className="profile-header">
        <h1>Profile</h1>
        <button className="dropdown-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 15l-6-6-6 6"/>
          </svg>
        </button>
      </div>
      
      {/* Main Content */}
      <div className="profile-content">
        <div className="profile-top">
          {/* Profile Picture */}
          <div className="profile-photo">
            <div className="profile-photo-container">
              <img 
                src="/api/placeholder/150/150" 
                alt="Profile" 
              />
            </div>
          </div>
          
          {/* Name and Title */}
          <div className="profile-name-title">
            <h2>Kylie</h2>
            <h2>Jefferson</h2>
            <p>Graphic Designer</p>
          </div>
          
          {/* Details */}
          <div className="profile-details">
            <div className="detail-item">
              <p className="detail-label">Name:</p>
              <p className="detail-value">Kylie Jefferson</p>
            </div>
            
            <div className="detail-item">
              <p className="detail-label">Date of birth:</p>
              <p className="detail-value">June 6, 1990</p>
            </div>
            
            <div className="detail-item">
              <p className="detail-label">Address:</p>
              <p className="detail-value">San Francisco CA 94102 US</p>
            </div>
            
            <div className="detail-item">
              <p className="detail-label">Phone:</p>
              <p className="detail-value highlight">+1-800-123-4567</p>
            </div>
            
            <div className="detail-item">
              <p className="detail-label">Email:</p>
              <p className="detail-value highlight">info@example.com</p>
            </div>
            
            <div className="detail-item">
              <p className="detail-label">Website:</p>
              <p className="detail-value highlight">https://themerex.net</p>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <hr className="profile-divider" />
        
        {/* Bio */}
        <p className="profile-bio">
          Welcome to my portfolio! I am a graphic designer at ThemeREX web design studio. I am passionate about my job and my 
          personal contribution to the world of modern web design. Here, you will be able to learn more about my projects as well 
          as get to know me as a person. I like nothing more than telling stories with the help of photography, art and life 
          experiences that celebrate simplicity and creativity. Follow me on social media for regular updates!
        </p>
      </div>
    </div>
  );
};

export default Page;