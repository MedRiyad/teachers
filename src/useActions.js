import { useEffect } from 'react';

const useActions = () => {
  useEffect(() => {
    const toggleBtn = document.getElementById('toggle-btn');
    const body = document.body;
    let darkMode = localStorage.getItem('dark-mode');

    const enableDarkMode = () => {
      if (toggleBtn) {
        toggleBtn.classList.replace('fa-sun', 'fa-moon');
      }
      body.classList.add('dark');
      localStorage.setItem('dark-mode', 'enabled');
    };

    const disableDarkMode = () => {
      if (toggleBtn) {
        toggleBtn.classList.replace('fa-moon', 'fa-sun');
      }
      body.classList.remove('dark');
      localStorage.setItem('dark-mode', 'disabled');
    };

    if (darkMode === 'enabled') {
      enableDarkMode();
    }

    if (toggleBtn) {
      toggleBtn.onclick = () => {
        darkMode = localStorage.getItem('dark-mode');
        if (darkMode === 'disabled') {
          enableDarkMode();
        } else {
          disableDarkMode();
        }
      };
    }

    const profile = document.querySelector('.header .flex .profile');
    const userBtn = document.querySelector('#user-btn');
    const search = document.querySelector('.header .flex .search-form');
    const searchBtn = document.querySelector('#search-btn');
    const sideBar = document.querySelector('.side-bar');
    const menuBtn = document.querySelector('#menu-btn');
    const closeBtn = document.querySelector('#close-btn');

    if (userBtn) {
      userBtn.onclick = () => {
        profile.classList.toggle('active');
        search.classList.remove('active');
      };
    }

    if (searchBtn) {
      searchBtn.onclick = () => {
        search.classList.toggle('active');
        profile.classList.remove('active');
      };
    }

    if (menuBtn) {
      menuBtn.onclick = () => {
        sideBar.classList.toggle('active');
        body.classList.toggle('active');
      };
    }

    if (closeBtn) {
      closeBtn.onclick = () => {
        sideBar.classList.remove('active');
        body.classList.remove('active');
      };
    }

    window.onscroll = () => {
      profile.classList.remove('active');
      search.classList.remove('active');

      if (window.innerWidth < 1200) {
        sideBar.classList.remove('active');
        body.classList.remove('active');
      }
    };
  }, []);
};

export default useActions;
