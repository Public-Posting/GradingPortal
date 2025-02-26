import React from 'react';
import './Sidebar.css';

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <div className="menu-item active">
        <span className="icon"></span>
        <img src="/pngegg.png" alt="home" className="logo1" />
        <span className="menu-text">Dashboard</span>
      </div>
      <div className="menu-item">
        <span className="icon"></span>
        <img src="/faculty.png" alt="faculty" className="logo1" />
        <span className="menu-text">Faculty</span>
      </div>
      <div className="menu-item">
        <img src="/event.png" alt="events" className="logo1" />
        <span className="menu-text">Events</span>
      </div>
    </div>
  );
};

export default Sidebar;
