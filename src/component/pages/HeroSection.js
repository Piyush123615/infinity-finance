import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../assets/herosection/hsh.jpg'
import img2 from '../../assets/herosection/taigun.jpg'
import img3 from '../../assets/herosection/yamaha.jpg'
import img4 from '../../assets/herosection/businessloan.jpg'
import '../../assets/styles/Home.css'


function ImageCarousel() {
  return (
    <Carousel id='carousel'>


      <Carousel.Item>
        <img
          className="d-block w-100%"
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='text-dark'>Dream Big, Pay Less :- Competitive rates to make your dream home a reality.</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100%"
          src={img2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3 className='text-dark'>New Car, No Worries :- Simple car loan process and great rates.</h3>
        </Carousel.Caption>
      </Carousel.Item>

      
      <Carousel.Item>
        <img
          className="d-block w-100%"
          src={img3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3 className='text-danger'>Ride Your Dream Bike :- Affordable two-wheeler loans for every rider.</h3>
        </Carousel.Caption>
      </Carousel.Item>

      
      <Carousel.Item>
        <img
          className="d-block w-100%"
          src={img4}
          alt="Fourth slide"
        />
        <Carousel.Caption>
          <h3 className='text-danger'>Your Business, Our Support :- Fast and flexible business loans to fuel your success. </h3>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
}

export default ImageCarousel;
