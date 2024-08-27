import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';

function SignIn() {
  const {register ,handleSubmit }  =useForm();
  const navigate= useNavigate();

   const getFormData= data=>{
    let {username,password}=data
          axios.get(`http://localhost:8088/admin/admin-details/admin/${username}/${password}`)
          .then(response=>{
              if(response.status===200)
              {
                     let adminJson=JSON.stringify(response.data)
                     localStorage.setItem('admin',adminJson);

                     navigate("/dash")
              }
              else alert("Something Went Wrong");
          })
          .catch(error=>{
            console.log(error)
            alert(error.response.data.message)
          })

   }
  return (
    <div className='d-flex justify-content-center'>
         <form onSubmit={handleSubmit(getFormData)} className='w-50 mt-5 border border-primary p-5'>
            <h1 className='text-secondary mb-5'>Login Here...!</h1>
            <input type='text' className='form-control mb-3' {...register('username')} 
                   placeholder='Enter Username'/>
            <input type='text' className='form-control mb-3' {...register('password')} 
                   placeholder='Enter Password'/>

            <button type='submit' className='btn btn-success w-100'>Login</button>

         </form>
    </div>
  )
}

export default SignIn