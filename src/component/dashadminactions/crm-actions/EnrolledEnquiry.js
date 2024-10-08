import React, { useEffect, useState } from 'react';
import axios from 'axios';

function EnrolledEnquiry() {
  const [employeeList, setEmployeeList] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8088/enq/getAll_enquiry')
      .then(response => {
        if (response.status === 200) {
          setEmployeeList(response.data);
        }
      })
      .catch(error => console.log(error));
  }, []);
  const handleCheckCIBIL = (employeeId) => {
    // Handle the check CIBIL action here
    console.log(`Checking CIBIL for employee ID: ${employeeId}`);
    axios.patch(`http://localhost:8088/enq/update_enq_status/${employeeId}/FORWARD_TO_OE`).then(
      res=>{
        if(res.status===200)
        {
          alert(`Cibil checking forwarded to OE for id ${employeeId}`)
        }
        else
        {
          alert("Something went wrong!!")
        }
      }
    )
  };


  return (
    <div className="container mt-5">
      <h2>Enrolled Enquiries</h2>
      {employeeList.length > 0 ? (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Age</th>
              <th>Email</th>
              <th>Mobile Number</th>
              <th>Pancard Number</th>
              <th>Aadhar Card Number</th>
              <th>Gender</th>
              <th>Enquiry Status</th>
            </tr>
          </thead>
          <tbody>
            {employeeList.map((employee, index) => (
              <tr key={index}>
                <td>{employee.enquiryID}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.age}</td>
                <td>{employee.email}</td>
                <td>{employee.mobno}</td>
                <td>{employee.pancardno}</td>
                <td>{employee.adharcardno}</td>
                <td>{employee.gender}</td>
                <td>{employee.status}</td>
                <td>
                  {employee.status === 'IN_PROGRESS' && (
                    <button
                      className="btn btn-primary"
                      onClick={() => handleCheckCIBIL(employee.enquiryID)} // Assume `employee.id` is unique
                    >
                      Check CIBIL
                    </button>
                  )}
                  </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No enquiries yet.</p>
      )}
    </div>
  );
}

export default EnrolledEnquiry;
