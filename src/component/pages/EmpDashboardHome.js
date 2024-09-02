import React, { useEffect, useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import EmpDashSidenav from './EmpDashSidenav';
import AddEmployee from '../dashadminactions/admin-actions/AddEmployee';
import ViewEmployee from '../dashadminactions/admin-actions/ViewEmployee';
import EnrolledEnquiry from '../dashadminactions/crm-actions/EnrolledEnquiry';
import ApprovedEnquiry from '../dashadminactions/crm-actions/ApprovedEnquiry';
import RejectedEnquiry from '../dashadminactions/crm-actions/RejectedEnquiry';
import LoanApplications from '../dashadminactions/crm-actions/LoanApplications';
import AppStatistics from '../dashadminactions/admin-actions/AppStatistics';
import Header from '../navigation/Header';
import CheckCibil from '../dashadminactions/oe-actions/CheckCibil';
import UnderWriting from '../dashadminactions/oe-actions/UnderWriting';

function EmpDashboardHome() {

    const [admin,setAdmin]=useState({});

    useEffect(()=>{
       let adminJson= localStorage.getItem('admin');
       let ad =JSON.parse(adminJson);
       setAdmin(ad);
    },[])
  return (
    
    <div>
      <div>
        <Header/>
      </div>
      <div className='row w-100 m-0 d-flex '>
        <div className='col col-3' style={{borderRight:'1px black groove'}}>
         <div className='text-center mt-5'>
          <img src={`data:image/jpeg;base64,${admin.adminImage}`} width={100} height={100} className='profile rounded-circle ms-5 ' alt='profile'/>
          <span className='ms-5'>
          <p className='text-success fs-3 m-0'> Mr. {admin.firstName}</p>
          <p className='text-danger fs-5 m-0'>{admin.userType}</p> 
          </span>       
         </div>
         <div>
          <EmpDashSidenav/>
         </div> 
        </div>
        
        <div className='col col-9'>
           <Routes>
                <Route path='add-employee' element={<AddEmployee/>} />
                <Route path='view-employee' element={<ViewEmployee/>} />
                <Route path='app-statistics' element={<AppStatistics/>} />

                <Route path='enrolled-enquiry' element={<EnrolledEnquiry/>} />
                <Route path='approved-enquiry' element={<ApprovedEnquiry/>} />
                <Route path='Rejected-Enquiry' element={<RejectedEnquiry/>} />
                <Route path='loan-application/:enquiry_id' element={<LoanApplications/>} /> 

                <Route path='check-cibil' element={<CheckCibil/>} />
                <Route path='under-writing' element={<UnderWriting/>} />
           </Routes>
        </div>
      </div>
    </div>

      
    
  )
}

export default EmpDashboardHome