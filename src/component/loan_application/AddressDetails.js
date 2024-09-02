import React from 'react'

function AddressDetails({formdata,setFormData}) {
  return (
    <div>
      <form  className='border border-secondary w-50 p-3 mt-2'>

<div className='form-container'>
  <label className="form-label" htmlFor="area">Area Name</label>
  <input type='text' className='form-control' id="area" value={formdata.areaName}
  onChange={(event)=>setFormData({...formdata, areaName: event.target.value})}/>
</div>

<div className='form-container'>
  <label className="form-label" htmlFor="city">City Name</label>
  <input type='text' className='form-control' id="city" value={formdata.cityName}
  onChange={(event)=>setFormData({...formdata, cityName: event.target.value})} />
</div>
<div className='form-container'>
  <label className="form-label" htmlFor="pin">Pincode</label>
  <input type='text' className='form-control' id="pin" value={formdata.pincode}
  onChange={(event)=>setFormData({...formdata, pincode: event.target.value})} />
</div>
<div className='form-container'>
  <label className="form-label" htmlFor="state">State</label>
  <input type='text' className='form-control' id="state" value={formdata.state}
  onChange={(event)=>setFormData({...formdata, state: event.target.value})} />
</div>

</form>
    </div>
  )
}

export default AddressDetails