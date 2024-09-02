import React from 'react'

function AccountDetails({formdata,setFormData}) {
  return (
    <div>
      <form  className='border border-secondary w-50 p-3 mt-2'>

<div className='form-container'>
  <label className="form-label" htmlFor="acn">Account Number</label>
  <input type='text' className='form-control' id="acn" value={formdata.accountNumber}
  onChange={(event)=>setFormData({...formdata, accountNumber: event.target.value})} />
</div>

<div className='form-container'>
  <label className="form-label" htmlFor="actype">Account Type</label>
  <input type='text' className='form-control' id="actype" value={formdata.accountType}
  onChange={(event)=>setFormData({...formdata, accountType: event.target.value})}/>
</div>

<div className='form-container'>
  <label className="form-label" htmlFor="ab">Account Balance</label>
  <input type='text' className='form-control' id="ab" value={formdata.accountBalance}
  onChange={(event)=>setFormData({...formdata, accountBalance: event.target.value})} />
</div>
<div className='form-container'>
  <label className="form-label" htmlFor="ahn">Account Holder Name</label>
  <input type='text' className='form-control' id="ahn" value={formdata.accountHolderName}
  onChange={(event)=>setFormData({...formdata, accountHolderName: event.target.value})} />
</div>
<div className='form-container'>
  <label className="form-label" htmlFor="acst">Account Status</label>
  <input type='text' className='form-control' id="acst" value={formdata.accountStatus}
  onChange={(event)=>setFormData({...formdata, accountStatus: event.target.value})} />
</div>
</form>
    </div>
  )
}

export default AccountDetails