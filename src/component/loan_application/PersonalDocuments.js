import React from 'react'

function PersonalDocuments({formdata,setFormData}) {
    
    const handleFileChange = (event, key) => {
        // event.target.files will be an array of files
        const file = event.target.files[0];
        console.log(file);
        if (file) {
          setFormData({ ...formdata, [key]: file });
        }
      };

  return (
    <div>
        <form  className='border border-secondary w-50 p-3 mt-2'>

<div className='form-container'>
  <label className="form-label" htmlFor="pan">Pan Card</label>
  <input type='file' className='form-control' id="pan"
  onChange={(event) => handleFileChange(event, 'pancard')}/>
</div>

<div className='form-container'>
  <label className="form-label" htmlFor="adhar">Aadhar Card</label>
  <input type='file' className='form-control' id="adhar"
  onChange={(event) => handleFileChange(event, 'adharcard')} />
</div>
<div className='form-container'>
  <label className="form-label" htmlFor="photo">Photo</label>
  <input type='file' className='form-control' id="photo"
  onChange={(event) => handleFileChange(event, 'photo')} />
</div>
<div className='form-container'>
  <label className="form-label" htmlFor="sign">Signature</label>
  <input type='file' className='form-control' id="sign" 
  onChange={(event) => handleFileChange(event, 'sign')} />
</div>

</form>
    </div>
  )
}

export default PersonalDocuments