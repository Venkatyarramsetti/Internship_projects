import React from 'react';
import './Home.css'; // Import hero styles

const Home = () => (
  <section id="home" className="home-hero">
    <div className="hero-content">
      <h1 className="hero-title">ICC T20 World Cup 2024</h1>
      <p className="hero-subtitle">
        Join us for 55 action-packed matches across iconic venues in USA & the West Indies.
      </p>
      <a href="#tickets" className="btn btn-primary">Get Tickets</a>
    </div>
  </section>
);

export default Home;
