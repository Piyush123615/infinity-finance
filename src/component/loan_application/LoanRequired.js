import React from 'react'

function LoanRequired({formdata,setFormData}) {
  return (
    <div>
      <form  className='border border-secondary w-50 p-3 mt-2'>

<div className='form-container'>
  <label className="form-label" htmlFor="lr">Loan Required</label>
  <input type='text' className='form-control' id="lr" value={formdata.loanrequired}
  onChange={(event)=>setFormData({...formdata, loanrequired: event.target.value})}/>
</div>

<div className='form-container'>
  <label className="form-label" htmlFor="dp">Down Payment</label>
  <input type='text' className='form-control' id="dp" value={formdata.downpayment}
  onChange={(event)=>setFormData({...formdata, downpayment: event.target.value})} />
</div>
<div className='form-container'>
  <label className="form-label" htmlFor="tn">Tenure</label>
  <input type='text' className='form-control' id="tn" value={formdata.requiredTenure}
  onChange={(event)=>setFormData({...formdata, requiredTenure: event.target.value})} />
</div>
<div className='form-container'>
  <label className="form-label" htmlFor="status">Status</label>
  <input type='text' className='form-control' id="status" value={formdata.status}
  onChange={(event)=>setFormData({...formdata, status: event.target.value})} />
</div>

</form>
    </div>
  )
}

export default LoanRequired