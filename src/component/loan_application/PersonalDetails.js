import React from 'react'

function PersonalDetails({formdata,setFormData}) {
  return (
    <div>
      <form  className='border border-secondary w-50 p-3 mt-2'>

<div className='form-container'>
  <label className="form-label" htmlFor="cn">Customer Name:-</label>
  <input type='text' className='form-control' id="cn" value={formdata.customerName}
  onChange={(event)=>setFormData({...formdata, customerName: event.target.value})} />
</div>

<div className='form-container'>
  <label className="form-label" htmlFor="dob">Customer DOB</label>
  <input type='date' className='form-control' id="dob" value={formdata.customerDOB}
  onChange={(event)=>setFormData({...formdata, customerDOB: event.target.value})} />
</div>
<div className='form-container'>
  <label className="form-label" htmlFor="age">Customer Age</label>
  <input type='text' className='form-control' id="age" value={formdata.customerAge}
  onChange={(event)=>setFormData({...formdata, customerAge: event.target.value})} />
</div>
<div className='form-container'>
  <label className="form-check-label">Select Gender</label><br/>
  <input type='radio' name='gender' className='form-check-input' id="male" value={formdata.gender}
  onClick={(event)=>setFormData({...formdata, gender: event.target.value})} />
  <label className="form-check-label" htmlFor="male">Male</label>
  <input type='radio' name='gender' className='form-check-input' id="female" value={formdata.gender}
  onClick={(event)=>setFormData({...formdata, gender: event.target.value})} />
  <label className="form-check-label" htmlFor="female">Female</label>
  <input type='radio' name='gender' className='form-check-input' id="other" value={formdata.gender}
  onClick={(event)=>setFormData({...formdata, gender: event.target.value})} />
  <label className="form-check-label" htmlFor="other">Other</label>
</div>
<div className='form-container'>
  <label className="form-label" htmlFor="email">Customer Email</label>
  <input type='email' className='form-control' id="email" value={formdata.email}
  onChange={(event)=>setFormData({...formdata, email: event.target.value})} />
</div>

<div className='form-container'>
  <label className="form-label" htmlFor="mobno">Customer Mobile No</label>
  <input type='text' className='form-control' id="mobno" value={formdata.mobno}
  onChange={(event)=>setFormData({...formdata, mobno: event.target.value})} />
</div>

</form>
    </div>
  )
}

export default PersonalDetails