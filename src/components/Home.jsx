import React from 'react';
import './Home.css';
import { useHistory } from 'react-router-dom';



export default function Home() {

const history = useHistory();

  const handleClick = (e) => {
    e.preventDefault();
    history.push('/orderpizza');
  }
    return (
      <header className="home-header">
        <div className="header-content">
          <img src="images\iteration-1-images\logo.svg" alt=""/>
          <h1>fırsatı kaçırma</h1>
          <p>KOD ACIKTIRIR <br/>
            Pizza, DOYURUR
          </p>
          <button className="btn" onClick={handleClick}>ACIKTIM</button>
        </div>
      </header>
    );
}