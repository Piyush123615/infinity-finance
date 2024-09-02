import React from 'react'

function FamilyDetails({formdata,setFormData}) {
  return (
    <div>
      <form  className='border border-secondary w-50 p-3 mt-2'>

<div className='form-container'>
  <label className="form-label" htmlFor="nooffm">No Of Family Members</label>
  <input type='text' className='form-control' id="nooffm" value={formdata.noofFamilyMember}
  onChange={(event)=>setFormData({...formdata, noofFamilyMember: event.target.value})}/>
</div>

<div className='form-container'>
  <label className="form-label" htmlFor="ms">Marital Status</label>
  <input type='text' className='form-control' id="ms" value={formdata.maritalstatus}
  onChange={(event)=>setFormData({...formdata, maritalstatus: event.target.value})} />
</div>
<div className='form-container'>
  <label className="form-label" htmlFor="noc">No Of Child</label>
  <input type='text' className='form-control' id="noc" value={formdata.noofChild}
  onChange={(event)=>setFormData({...formdata, noofChild: event.target.value})} />
</div>
<div className='form-container'>
  <label className="form-label" htmlFor="dm">Dependent Member</label>
  <input type='text' className='form-control' id="dm" value={formdata.dependentmember}
  onChange={(event)=>setFormData({...formdata, dependentmember: event.target.value})} />
</div>
<div className='form-container'>
  <label className="form-label" htmlFor="fm">Family Income</label>
  <input type='text' className='form-control' id="fm" value={formdata.familyIncome}
  onChange={(event)=>setFormData({...formdata, familyIncome: event.target.value})} />
</div>
</form>
    </div>
  )
}

export default FamilyDetails