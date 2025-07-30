import React from 'react';
import './Home.css';

export default function Home() {
    return (
      <header className="home-header">
        <div className="header-content">
          <img src="images\iteration-1-images\logo.svg" alt=""/>
          <h1>fırsatı kaçırma</h1>
          <p>KOD ACIKTIRIR <br/>
            Pizza, DOYURUR
          </p>
          <button className="btn">ACIKTIM</button>
        </div>
      </header>
    );
}