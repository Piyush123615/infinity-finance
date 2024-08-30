import React from "react"
import '../../assets/styles/TwoWheelerLoan.css'
import image from '../../assets/images/scooters.jpg'
function TwoWheelerLoan() {
  return (
    <div  className='TWLoan-Container'>
      <h3 className="text-center">Two-Wheeler Loan</h3>
      <div className='d-flex'>
        <div className='w-50 text-center'>
          <img src={image} height={500}></img>
         </div>
        
         <div>

   <h5>Overview</h5> 
   <p> A two-wheeler loan is used to finance the purchase of motorcycles, scooters, or other two-wheeled vehicles.
   </p>

   <h5>Features</h5>
     <p>- Shorter tenure compared to four-wheeler loans, usually up to 5 years.<br/>
     - Quick processing and approval.<br/>
     - Low down payment options.<br/>
     - Financing up to 90% of the vehicle’s on-road price.</p>
 
     <h5>Eligibility Criteria</h5>
     <p>
     - Minimum age requirement (usually 18 years).<br/>
     - Proof of steady income.<br/>
     - Basic KYC documents.</p>

      <h5>Process</h5>
      <p>
     - Choose the two-wheeler and apply for the loan.<br/>
     - Provide necessary documents for verification.
     - Approval and loan disbursement to the dealer.
</p>

        </div>

        </div>
        </div>

       
  )
}

export default TwoWheelerLoan