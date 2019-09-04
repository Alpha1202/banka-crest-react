import React from 'react';
import Carousel from '../carouselView/index';
import LoginView from '../loginView/index';
import '../../styles/homepage.css';

const Index = () => (
  <div id="wrapper">
    <Carousel />
    <LoginView />
  </div>
);

export default Index;
