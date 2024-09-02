import React, { useEffect, useState } from 'react'
import '../../assets/styles/EmpSidenav.css'
import { Link } from 'react-router-dom';
function EmpDashSidenav() {
   const [userType , setUserType] =useState();
    let previleges =[
         // 0th index
         {
            "ADMIN":[
                {label:'Add Employee' , path:'add-employee'},
                {label:'View Employee' , path:'view-employee'},
                {label:'App Statistics' , path:'app-statistics'}
            ],
            "CRM":[
                {label:'Enrolled Enquiry' ,path:'enrolled-enquiry'},
                {label:'Approved Enquiry' ,path:'approved-enquiry'},
                {label:'Rejected Enquiry' , path:'Rejected-Enquiry'},
                

            ],
            "OE":[
               {label:'Check Cibil', path:'check-cibil'},
               {label:'Under Writing', path:'under-writing'}
            ]
         }
    ]
 
    useEffect(()=>{
       let adminJson =localStorage.getItem('admin');
         let admin = JSON.parse(adminJson);
         setUserType(admin.userType);
    },[])


  return (
     <div className='d-flex flex-column nav'>
       
        { 
            (userType)? previleges[0][userType].map((previlege,index)=>{
                return  <Link className='btn btn-primary'key={index} to={previlege.path}>{previlege.label}</Link>
           
                }):<h1>Login Again</h1>
         
        }
     
     </div>
  )
}

export default EmpDashSidenav