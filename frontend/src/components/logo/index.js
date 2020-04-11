import React from 'react';
import logo from './logo.png';
import './styles.css';

const Logo = () => {
  return (
    <div className="logoContainer">
      <img src={logo} className="logo" alt="logo" />
      <div className="logoTitle">Doccom</div>
    </div>
  );
};

export default Logo;
