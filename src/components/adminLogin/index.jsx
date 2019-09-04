import React from 'react';
import '../../styles/homepage.css';
import Carousel from '../carouselView/index';
import AdminSigninView from './adminLoginView';


const Index = () => (
  <div id="wrapper">
    <Carousel />
    <AdminSigninView />
  </div>
);

export default Index;
