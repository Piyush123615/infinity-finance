import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

function EnquiryPage() {
  const { register, handleSubmit,reset } = useForm();

  const getFormData = enqdata => {
    axios.post("http://localhost:8088/enq/create_enquiry",enqdata).then(
        response=>{
            if(response.status===201)
            {
                alert("Enquiry is successfully submitted!!")
                reset();
            }
            else
            {
                alert("Something went wrong!!")
            }
        }
    ).catch(error=>error.response.data);
    
  };

  return (
    <form onSubmit={handleSubmit(getFormData)} className='w-100 wt-5 border border-primary p-5'>
      <h1 className='text-secondary mb-2 text-center'>Enquiry</h1>
      
      <label>First Name:</label>
      <input
        type='text'
        className='form-control mb-2'
        {...register('firstName', { required: true })}
      />
      
      <label>Last Name:</label>
      <input
        type='text'
        className='form-control mb-2'
        {...register('lastName', { required: true })}
      />

      <label>Age:</label>
      <input
        type='number'
        className='form-control mb-2'
        {...register('age', { required: true, min: 21, max: 100 })}
      />

      <label>Email:</label>
      <input
        type='email'
        className='form-control mb-2'
        {...register('email', { required: true })}
      />

      <label>Mobile Number:</label>
      <input
        type='text'
        className='form-control mb-2'
        {...register('mobno', { required: true, pattern: /^[7-9][0-9]{9}$/ })}
      />

      <label>PAN Card Number:</label>
      <input
        type='text'
        className='form-control mb-2'
        {...register('pancardno', { required: true, pattern: /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/ })}
      />

      <label>Aadhar Card Number:</label>
      <input
        type='text'
        className='form-control mb-2'
        {...register('adharcardno', { required: true, pattern: /^\d{12}$/ })}
      />

      <label>Gender:</label>
      <select className='form-control mb-2' {...register('gender', { required: true })}>
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>

      <label>Status:</label>
      <select className='form-control mb-2' {...register('status', { required: true })}>
        <option value="IN_PROGRESS">In-Progress</option>
        <option value="CLOSED">Closed</option>
        <option value="APPROVED">Approved</option>
        <option value="REJECTED">Rejected</option>
      </select>

      <button type='submit' className='btn btn-primary mt-3'>Submit</button>
    </form>
  );
}

export default EnquiryPage;
