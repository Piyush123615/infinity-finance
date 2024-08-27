import React from 'react'
import { Route, Routes } from 'react-router-dom'
import VisitorHeader from '../navigation/VisitorHeader'
import AboutUs from './AboutUs'
import EnquiryPage from './EnquiryPage'
import OurServices from './OurServices'
import ContactUs from './ContactUs'
import SignIn from './SignIn'
import VisitorHome from './VisitorHome'

function Visitor() {
  return (
    
     <div>
      <VisitorHeader/>
     <Routes>
      <Route path='/' element={<VisitorHome/>}/>
      <Route path='/aboutus' element={<AboutUs/>}/>
      <Route path='/enquiry' element={<EnquiryPage/>}/>
      <Route path='/ourservices' element={<OurServices/>}/>
      <Route path='/contact' element={<ContactUs/>}/>
      <Route path='/signin' element={<SignIn/>}/>
     </Routes>

     </div>
  )
}

export default Visitor