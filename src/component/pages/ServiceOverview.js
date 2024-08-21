
import React from 'react';
import '../../assets/styles/Home.css'


const ServiceOverview = () => {
  const services = [
    { name: 'Two-Wheeler Loans', description: 'Get the best deals on two-wheeler financing.' },
    { name: 'Home Loans', description: 'Affordable home loans with flexible terms.' },
    { name: 'Four-Wheeler Loans', description: 'Drive your dream car with our easy financing options.' },
    { name: 'Business Loans', description: 'Empowering businesses with quick and hassle-free loans.' },
  ];

  return (
    <div className="service-overview">
      <h2>Our Services</h2>
      <div className="service-cards">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h3>{service.name}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceOverview;
