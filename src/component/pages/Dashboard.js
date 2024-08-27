
import React from 'react';
import Header from '../navigation/Header';
import { Route, Routes } from 'react-router-dom';
import AboutUs from './AboutUs';
import EnquiryPage from './EnquiryPage';
import OurServices from './OurServices';
import ContactUs from './ContactUs';
import EmpDashboardHome from './EmpDashboardHome';

const Dashboard = () => {
  return (
    <div className="homepage">
      <Header/>
      <Routes>
      <Route path='/' element={<EmpDashboardHome/>}/>
      <Route path='/aboutus' element={<AboutUs/>}/>
      <Route path='/enquiry' element={<EnquiryPage/>}/>
      <Route path='/ourservices' element={<OurServices/>}/>
      <Route path='/contact' element={<ContactUs/>}/>
      </Routes>
      
    </div>
  );
};

export default Dashboard;
