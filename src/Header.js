import React from 'react';
import './style.css';
import useActions from './useActions'; 

const Header = () => {

    useActions();

  return (
    <header className="header">
      <section className="flex">
        <a href="home.html" className="logo">Educa.</a>
        <form action="search.html" method="post" className="search-form">
          <input type="text" name="search_box" required placeholder="search courses..." maxLength="100" />
          <button type="submit" className="fas fa-search"></button>
        </form>
        <div className="icons">
          <div id="menu-btn" className="fas fa-bars"></div>
          <div id="search-btn" className="fas fa-search"></div>
          <div id="user-btn" className="fas fa-user"></div>
          <div id="toggle-btn" className="fas fa-sun"></div>
        </div>
        <div className="profile">
          <img src="images/pic-1.jpg" className="image" alt="Profile" />
          <h3 className="name">Med Riyad</h3>
          <p className="role">Student</p>
          <a href="profile.html" className="btn">View Profile</a>
          <div className="flex-btn">
            <a href="login.html" className="option-btn">Login</a>
            <a href="register.html" className="option-btn">Register</a>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;