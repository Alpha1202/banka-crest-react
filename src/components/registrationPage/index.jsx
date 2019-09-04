import React from 'react';
import '../../styles/homepage.css';
import Carousel from '../carouselView/index';
import SignUpView from '../signupView/index';


const Index = () => (
  <div id="wrapper">
    <Carousel />
    <SignUpView />
  </div>
);

export default Index;
