
import React from 'react';
import HeroSection from './HeroSection';
import ServiceOverview from './ServiceOverview';
import Testimonials from '../navigation/Testimonal';
import Header from '../navigation/Header';
import Footer from '../navigation/Footer';
import ContactUs from './ContactUs';

const Dashboard = () => {
  return (
    <div className="homepage">
      <Header/>
      <HeroSection/>
      <ServiceOverview/>
      <Testimonials/>
      <Footer/>
      <ContactUs/> 
    </div>
  );
};

export default Dashboard;
