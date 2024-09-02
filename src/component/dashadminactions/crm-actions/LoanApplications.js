import React from 'react'
import { useState } from 'react'
import PersonalDetails from '../../loan_application/PersonalDetails';
import AddressDetails from '../../loan_application/AddressDetails';
import PersonalDocuments from '../../loan_application/PersonalDocuments';
import LoanRequired from '../../loan_application/LoanRequired';
import FamilyDetails from '../../loan_application/FamilyDetails';
import AccountDetails from '../../loan_application/AccountDetails';
import GuarantorDetails from '../../loan_application/GuarantorDetails';
import '../../../assets/styles/LoanApplication.css'
import axios from 'axios';

function LoanApplications() {

  const [pan,setPan]=useState(null)
  const [adhar,setAdhar]=useState(null)
  const [photo,setPhoto]=useState(null)
  const [sign,setSign]=useState(null)

  const [page, setPage]=useState(0);

  const [formdata, setFormData]=useState({
    customerName: "",
    customerDOB: "",
    customerAge : 0,
    gender: "",
    email : "",
    mobno : 0,
    areaName: "",
    cityName: "",
    pincode: 0,
    state: "",
    pancard: null,
    adharcard: null,
    photo: null,
    sign: null,
    requiredTenure: 0,
    downpayment: 0.0,
    loanrequired: 0.0,
    status: "",
    noofFamilyMember: 0,
    noofChild: 0,
    maritalstatus: "",
    dependentmember: "",
    familyIncome: 0.0,
    accountType: "",
    accountBalance: 0.0,
    accountHolderName: "",
    accountStatus: "",
    accountNumber: 0,
    guarantorName: "",
    guarantorDOB: "",
    guarantorRelationWithCustomer: "",
    guarantorMobNo: "",
    guarantorAdharNo: "",
    guarantorMortgageDetails: "",
    guarantorJobDetails: "",
    guarantorAddress:""
  })

  const formTitles=["Personal Details","Address Details","Loan Required","Family Details","Account Details","Guarantor Details","Personal Documents"]
  
  const pageDisplay=()=>{
    if(page===0)
    return <PersonalDetails formdata={formdata} setFormData={setFormData}/>
    else if(page===1)
      return <AddressDetails formdata={formdata} setFormData={setFormData}/>
    else if(page===2)
      return <LoanRequired formdata={formdata} setFormData={setFormData}/>
    else if(page===3)
      return <FamilyDetails formdata={formdata} setFormData={setFormData}/>
    else if(page===4)
      return <AccountDetails formdata={formdata} setFormData={setFormData}/>
    else if(page===5)
      return <GuarantorDetails formdata={formdata} setFormData={setFormData}/>
    else
      return <PersonalDocuments formdata={formdata} setFormData={setFormData}/>
  }

  return (
    <div>

      <div className='form'>
        
        <div className='header'>
          <h1>{[formTitles[page]]}</h1>
        </div>
        <div className='progressbar'>
          <div style={{width: page===0 ? "14.28%" : page==1 ? "28.57%" : page==2 ? "42.85%" : page==3 ? "57.14%" : page==4 ? "71.42%" : page==5 ? "85.71%" : "100%"}}></div>
        </div>
        <div className='body'>{pageDisplay()}</div>
        <div className='footer'>
        <button
            disabled={page==0} 
            onClick={()=>{setPage((currpage)=>currpage-1)}}>Prev
          </button>
          <button
            onClick={()=>{
              if(page ===  formTitles.length-1)
              {
                console.log(formdata)
                const data=new FormData();
                data.append("pan",formdata.pancard)
                data.append("adh",formdata.adharcard)
                data.append("pho",formdata.photo)
                data.append("sign",formdata.sign)
                delete formdata.pancard
                delete formdata.adharcard
                delete formdata.photo
                delete formdata.sign
                data.append("cust",JSON.stringify(formdata))
                axios.post('http://localhost:8088/loanapp/save_cust',data).then(
                  res=>{
                    if(res.status===201)
                    {
                      alert("Loan application submitted!!")
                    }
                  }
                ).catch(error=>console.log(error))
              }
              else
              {
                setPage((currpage)=>currpage+1)
              }
              }}>
              {page ===  formTitles.length-1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
      
    </div>
  )
}

export default LoanApplications