import React from 'react'

function GuarantorDetails({formdata,setFormData}) {
  return (
    <div>
      <form  className='border border-secondary w-50 p-3 mt-2'>

<div className='form-container'>
  <label className="form-label" htmlFor="gn">Guarantor Name</label>
  <input type='text' className='form-control' id="gn" value={formdata.guarantorName}
  onChange={(event)=>setFormData({...formdata, guarantorName: event.target.value})} />
</div>

<div className='form-container'>
  <label className="form-label" htmlFor="gd">Guarantor DOB</label>
  <input type='date' className='form-control' id="gd" value={formdata.guarantorDOB}
  onChange={(event)=>setFormData({...formdata, guarantorDOB: event.target.value})}/>
</div>

<div className='form-container'>
  <label className="form-label" htmlFor="rel">Guarantor Relation With Customer</label>
  <input type='text' className='form-control' id="rel" value={formdata.guarantorRelationWithCustomer}
  onChange={(event)=>setFormData({...formdata, guarantorRelationWithCustomer: event.target.value})} />
</div>
<div className='form-container'>
  <label className="form-label" htmlFor="mob">Guarantor Mobile Number</label>
  <input type='text' className='form-control' id="mob" value={formdata.guarantorMobNo}
  onChange={(event)=>setFormData({...formdata, guarantorMobNo: event.target.value})} />
</div>
<div className='form-container'>
  <label className="form-label" htmlFor="adh">Guarantor Aadhar Number</label>
  <input type='text' className='form-control' id="adh" value={formdata.guarantorAdharNo}
  onChange={(event)=>setFormData({...formdata, guarantorAdharNo: event.target.value})} />
</div>
<div className='form-container'>
  <label className="form-label" htmlFor="mortgage">Guarantor Mortgage Details</label>
  <input type='text' className='form-control' id="mortgage" value={formdata.guarantorMortgageDetails}
  onChange={(event)=>setFormData({...formdata, guarantorMortgageDetails: event.target.value})} />
</div>
<div className='form-container'>
  <label className="form-label" htmlFor="job">Guarantor Job Details</label>
  <input type='text' className='form-control' id="job" value={formdata.guarantorJobDetails}
  onChange={(event)=>setFormData({...formdata, guarantorJobDetails: event.target.value})} />
</div>
<div className='form-container'>
  <label className="form-label" htmlFor="add">Guarantor Address Details</label>
  <input type='text' className='form-control' id="add" value={formdata.guarantorAddress}
  onChange={(event)=>setFormData({...formdata, guarantorAddress: event.target.value})} />
</div>

</form>
    </div>
  )
}

export default GuarantorDetails