import React from 'react';
import Header from './Header';
import SideBar from './SideBar';
import Teachers from './Teachers';
import Footer from './Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <SideBar />
      <Teachers />
      <Footer />
    </div>
  );
};

export default App;
