import React from 'react'
import '../../assets/styles/HomeLoan.css';
import image from '../../assets/images/HomeLoan.jpg'

function HomeLoan() {
  return (
    
    <div className='HomeLoan-container'>
        <h3>Home Loan</h3>
      <div className='d-flex'>
         <div className='w-50 text-center'>
            <img src={image} height={500}></img>
         </div>
        <div>
        
        <h5> Overview :</h5>
          <p>A home loan is a secured loan taken by borrowers to purchase or construct a house.</p>

        <h5>Features :</h5>
        <p>  - Long tenure options, usually up to 30 years.<br/>
             - Competitive interest rates (fixed or floating).<br/>
             - Tax benefits under various sections of the Income Tax Act.<br/>
          </p>

          <h5> Eligibility Criteria :</h5>
          <p>- Minimum age requirement (usually 21 years).<br/>
          - Stable income and employment history.<br/>
          - Good credit score.<br/>
          - KYC documents and proof of income.<br/></p>

         <h5> Process :</h5>
         <p>- Application submission with necessary documents.<br/>
         - Verification and credit assessment.<br/>
         - Loan sanction and disbursement after legal and technical evaluation.<br/></p> 
         </div>
        
         </div>
    </div>
  )
}

export default HomeLoan