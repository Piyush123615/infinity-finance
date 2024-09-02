import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ApprovedEnquiry() {
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

  const approvedEnquiries = employeeList.filter(employee => employee.status === 'APPROVED');

  return (
    <div className="container mt-5">
      <h2>Enrolled Enquiries</h2>
      {employeeList.length > 0 ? (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Age</th>
              <th>Email</th>
              <th>Mobile Number</th>
              <th>Pancard Number</th>
              <th>Aadhar Card Number</th>
              <th>Gender</th>
              <th>Enquiry Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {approvedEnquiries.map((employee, index) => (
              <tr key={index}>
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
                  <Link class="btn btn-primary" to={`/dash/loan-application/${employee.enquiryID}`}>Apply Loan</Link>
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

export default ApprovedEnquiry;
