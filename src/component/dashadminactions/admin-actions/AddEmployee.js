import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

function AddEmployee() {
  const { register, handleSubmit, reset } = useForm();
  const [employeeImage,setEmployeeImage]=useState(null);

  const saveEmployeeDetails = (employee) => {
     console.log(employee)

     const formData=new FormData();
        formData.append("adminJson", JSON.stringify(employee));
        formData.append('adminImage',employeeImage);
        axios.post('http://localhost:8088/admin/admin-details/admin',formData).then(
          res=>{ if(res.status===201){
            alert("Employee Registered")
            reset();
          }}
          
        )
        .catch(error=>console.log(error));
  }
  function onUpdloadEmpPhoto(event)
  {
        setEmployeeImage(event.target.files[0]);
  }

  return (
    <div className='d-flex justify-content-center'>
      <form onSubmit={handleSubmit(saveEmployeeDetails)} className='border border-secondary w-50 p-3 mt-2'>

        <div className='form-container'>
          <label className="form-label" htmlFor="efn">Employee First Name:-</label>
          <input type='text' className='form-control' id="efn" {...register('firstName')} />
        </div>
        
        <div className='form-container'>
          <label className="form-label" htmlFor="eln">Employee Last Name:-</label>
          <input type='text' className='form-control' id="eln" {...register('lastName')} />
        </div>
        <div className='form-container'>
          <label className="form-label" htmlFor="eemail">Employee Email Id:-</label>
          <input type='text' className='form-control' id="eemail" {...register('email')} />
        </div>
        <div className='form-container'>
          <label className="form-label" htmlFor="ocp">Employee Designation:-</label>
          <input type='text' className='form-control' id="ocp" {...register('occupation')} />
        </div>
        <div className='form-container'>
          <label className="form-label" htmlFor="sal">Employee Salary:-</label>
          <input type='text' className='form-control' id="sal" {...register('salary')} />
        </div>

        <div className='form-container'>
          <label className="form-label" htmlFor="age">Employee Age:-</label>
          <input type='text' className='form-control' id="age" {...register('age')} />
        </div>
   
        <div className='form-container mt-3'>
          <select className="form-select" aria-label="Default select example" {...register("userType")}>
            <option defaultValue>Employee Designation</option>
            <option value={'ADMIN'}>Admin</option>
            <option value={'CRM'}>Customer Relationship Manager</option>
            <option value={'OE'}>Operational Execaive</option>
            <option value={'CM'}>Credit Manager</option>
            <option value={'AH'}>Account Head</option>
          </select>
        </div>
        <div className='form-container'>
          <label className="form-label" htmlFor="empImg">Upload Employee Photo:-</label>
          <input type='file' className='form-control' id="empImg"  onChange={ e=> onUpdloadEmpPhoto(e)}/>
        </div>
        

        <button className='btn btn-success w-100 mt-4'>Submit</button>
           


      </form>

    </div>
  )
}

export default AddEmployee