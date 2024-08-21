
import React from 'react';
import HeroSection from './HeroSection';
import ServiceOverview from './ServiceOverview';
import Testimonials from '../navigation/Testimonal';
import Header from '../navigation/Header';
import Footer from '../navigation/Footer';

const Dashboard = () => {
  return (
    <div className="homepage">
      <Header/>
      <HeroSection/>
      <ServiceOverview/>
      <Testimonials/>
      <Footer/>
    </div>
  );
};

export default Dashboard;
