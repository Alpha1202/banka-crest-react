import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../assets/logo.png';
import '../../styles/homepage.css';

const Index = () => (
  <div className="logo">
    <Link to="/">
      <img src={image} alt="logo" />
    </Link>
  </div>
);

export default Index;
