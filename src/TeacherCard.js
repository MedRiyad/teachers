import React from 'react';
import './style.css';

const TeacherCard = ({ image, name, role, playlists, videos, likes }) => {
  return (
    <div className="box">
      <div className="tutor">
        <img src={image} alt="Tutor" />
        <div>
          <h3>{name}</h3>
          <span>{role}</span>
        </div>
      </div>
      <p>Total playlists: <span>{playlists}</span></p>
      <p>Total videos: <span>{videos}</span></p>
      <p>Total likes: <span>{likes}</span></p>
      <a href="teacher_profile.html" className="inline-btn">View Profile</a>
    </div>
  );
};

export default TeacherCard;