import React from 'react'
import '../../assets/styles/HomeLoan.css';
import image from '../../assets/images/BussinessLoan.jpg'

function BussinessLoan() {
  return (
   
    <div className='BussinessLoan-container'>
         <h3>Business Loan : </h3>
        <div className='d-flex'>
            <div className='w-50 text-center'>
            <img src={image} height={500}></img>
            </div>

            <div> 
         <h5>Overview : </h5> <p>Business loans are unsecured loans provided to entrepreneurs or businesses to meet their capital or operational expenses.</p>
          <h5>Features :</h5>  
          <p>
            - Flexible loan amounts based on business requirements.<br/>
            - Short to medium repayment tenure, usually ranging from 1 to 5 years.<br/>
            - No collateral required (for unsecured loans).<br/>
            - Various types such as term loans, working capital loans, equipment financing, and SME/MSME loans.</p>
         <h5>Eligibility Criteria :</h5>
         <p>
            - Business vintage (usually a minimum of 2-3 years).<br/>
            - Good credit history and financial stability.<br/>
            - KYC documents and proof of business operations.</p><br/>
         <h5>Process :</h5>
            <p>- Submit a loan application with business details.<br/>
            - Document verification and credit evaluation.<br/>
            - Loan sanction and disbursement for approved applications.</p>

            </div>
        </div>
    </div>
  )
}

export default BussinessLoan