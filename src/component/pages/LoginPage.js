
// import React from 'react'
// import { useForm } from 'react-hook-form'
// import { useNavigate } from 'react-router-dom';

// function LoginPage() {

//     const {register,handleSubmit} = useForm();
//     const navigate=useNavigate();
//     const getformData=data=>{

//         alert(data.userName)
//         alert(data.password)

//         if(data.userName==='xyz' && data.password==='xyz@123')
//         {
//             navigate('/dash');
//         }

//         else{
//             alert("Enter valid login credentials...!")
//         }
//     }


//   return (
//     <div className='d-flex justify-content-center'>

//         <form onSubmit={handleSubmit(getformData)} className='w-50 mt-5 border border-primary p-5'>

//         <h1 className='text-secondary mb-5'>Login </h1>

//         <input type='text' className='form-control mb-3' {...register('username')}
//           placeholder='Enter UserName'></input>

          
//         <input type='text' className='form-control mb-3' {...register('password')}
//           placeholder='Enter Password'></input>

//           <butto type='submit' className='btn btn-danger w-100'>Login</butto>

//           </form>

//     </div>
//   )
// }

// export default LoginPage


// ===========================================================================================================

// src/EMICalculator.js


// import React, { useState } from 'react';

// const EMICalculator = () => {

//   const [principal, setPrincipal] = useState('');
//   const [rate, setRate] = useState('');
//   const [tenure, setTenure] = useState('');
//   const [emi, setEmi] = useState(null);

//   const calculateEMI = (principal, rate, tenure) => {
//     const monthlyRate = rate / 100 / 12;
//     const tenureMonths = tenure * 12;
//     const emi = principal * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths) / (Math.pow(1 + monthlyRate, tenureMonths) - 1);
//     return emi.toFixed(2);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const calculatedEMI = calculateEMI(principal, rate, tenure);
//     setEmi(calculatedEMI);
//   };

//   return (
//     <div>
//         <h1 className='text-secondary mb-5'>EMI Calculator</h1>

//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Principal Amount (₹):</label>
//           <input type="number" value={principal} onChange={(e) => setPrincipal(e.target.value)} required />
//         </div>
//         <div>
//           <label>Annual Interest Rate (%):</label>
//           <input type="number" value={rate} onChange={(e) => setRate(e.target.value)} step="0.01" required />
//         </div>
//         <div>
//           <label>Tenure (Years):</label>
//           <input type="number" value={tenure} onChange={(e) => setTenure(e.target.value)} required />
//         </div>
//         <button type="submit">Calculate EMI</button>
//       </form>
//       {emi && (
//         <div>
//           <h3>Monthly EMI: ₹{emi}</h3>
//         </div>
//       )}
//     </div>
//   );
// };

// export default EMICalculator;
