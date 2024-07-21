import React from 'react';
import TeacherCard from './TeacherCard';
import './style.css';

const teachersData = [
  {
    image: '../images/pic-2.jpg',
    name: 'John Deo',
    role: 'Developer',
    playlists: 4,
    videos: 18,
    likes: 1208,
  },
  {
    image: '../images/pic-3.jpg',
    name: 'Jane Smith',
    role: 'Designer',
    playlists: 6,
    videos: 25,
    likes: 1500,
  },
];

const Teachers = () => {
  return (
    <section className="teachers">
      <h1 className="heading">Expert Teachers</h1>
      <form action="" method="post" className="search-tutor">
        <input type="text" name="search_box" placeholder="search tutors..." required maxLength="100" />
        <button type="submit" className="fas fa-search" name="search_tutor"></button>
      </form>
      <div className="box-container">
        <div className="box offer">
          <h3>Become a Tutor</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, itaque ipsam fuga ex et aliquam.</p>
          <a href="register.html" className="inline-btn">Get Started</a>
        </div>
        {teachersData.map((teacher, index) => (
          <TeacherCard key={index} {...teacher} />
        ))}
      </div>
    </section>
  );
};

export default Teachers;
