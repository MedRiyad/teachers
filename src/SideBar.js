import React from 'react';
import './style.css';
import useActions from './useActions';

const Sidebar = () => {
  
    useActions();

    return (
    <div className="side-bar">
      <div id="close-btn">
        <i className="fas fa-times"></i>
      </div>
      <div className="profile">
        <img src="../images/pic-1.jpg" className="image" alt="Profile" />
        <h3 className="name">Med Riyad</h3>
        <p className="role">Student</p>
        <a href="profile.html" className="btn">View Profile</a>
      </div>
      <nav className="navbar">
        <a href="home.html"><i className="fas fa-home"></i><span>Home</span></a>
        <a href="about.html"><i className="fas fa-question"></i><span>About</span></a>
        <a href="courses.html"><i className="fas fa-graduation-cap"></i><span>Courses</span></a>
        <a href="teachers.html"><i className="fas fa-chalkboard-user"></i><span>Teachers</span></a>
        <a href="contact.html"><i className="fas fa-headset"></i><span>Contact Us</span></a>
      </nav>
    </div>
  );
};

export default Sidebar;
