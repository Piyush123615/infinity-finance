import React from 'react'
import '../../assets/styles/FourWheelerLoan.css'
import image from '../../assets/images/wallcar.jpg'
function FourWheelerLoan() {
  return (
    <div  className='FWLoan-Container'>
      <h3>Four-Wheeler Loan</h3>
      <div className='d-flex'>
        <div className='w-50 text-center'>
          <img src={image} height={500}></img>
         </div>
        
         <div className='ms-2'>
      <h2><b>Overview</b></h2>
      <p>A four-wheeler loan is a secured loan used to finance the purchase of a car or other four-wheeled vehicles.</p>  

      <h5>Features</h5>
      <p>
        - Flexible repayment tenure, usually up to 7 years.<br/>
        - Financing up to 100% of the vehicle's on-road price (depending on the lender).<br/>
        - Competitive interest rates based on the borrower’s credit profile.<br/>
        - Pre-approved loan offers for existing customers.
        </p>
 

      <h5>Eligibility Criteria</h5>
       <p> - Age limit (usually 21 to 65 years).<br/>
        - Income proof and employment stability.<br/>
        - Acceptable credit score and history.</p>

        <h5>Process</h5>
        <p>- Choose the vehicle and apply for the loan.<br/>
        - Submission of documents for verification.<br/>
        - Loan approval and disbursement to the car dealer. </p>
        

        </div>

        </div>
        </div>

       
  )
}

export default FourWheelerLoan