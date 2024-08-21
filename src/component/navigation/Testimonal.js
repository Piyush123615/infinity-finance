import React from 'react';
import '../../assets/styles/Home.css';

const Testimonials = () => {
  const testimonials = [
    { 
      name: 'Mukul Shende', 
      text: 'Infinity Finance made my dream of owning a home come true!', 
      image: require('../../assets/images/316486.webp') 
    },
    { 
      name: 'Raj Jadhav', 
      text: 'Quick and easy loan processing. Highly recommend!', 
      image: require('../../assets/images/316486.webp') 
    },
    { 
      name: 'Nitin Shirshat', 
      text: 'Their customer service is outstanding!', 
      image: require('../../assets/images/316486.webp') 
    },
  ];

  return (
    <div className="testimonials">
      <h2>What Our Customers Say</h2>
      <div className="testimonial-cards">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <img 
              src={testimonial.image} 
              alt={`${testimonial.name}`} 
              className="testimonial-image"
            />
            <p>"{testimonial.text}"</p>
            <h4>- {testimonial.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
