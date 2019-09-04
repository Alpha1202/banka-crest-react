import React, { Component } from 'react';

class Carousel extends Component {
      
  componentDidMount() {
    this.startSlide();
  }

startSlide = () => {
  let index = 0;
  const timer = setInterval(() => {
    let i;
    const x = document.getElementsByClassName('slide');

    for (i = 0; i < x.length; i++) {
      x[i].style.display = 'none';
    }
    index++;

    if (index > x.length) {
      index = 1;
    }
    x[index - 1].style.display = 'block';
  }, 5000);
  return timer;
};

render() {
  const { children } = this.props;

  return <div>{children}</div>;
}
}

export default Carousel;
