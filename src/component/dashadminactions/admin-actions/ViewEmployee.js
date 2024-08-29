import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ViewEmployee() {
  const [employeeList, setEmployeeList] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8088/admin/admin-details/getAllAdmin')
      .then(response => {
        if (response.status === 200) {
          setEmployeeList(response.data);
        }
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container mt-5">
      <h2>Employee List</h2>
      {employeeList.length > 0 ? (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Occupation</th>
              <th>Salary</th>
              <th>Age</th>
              <th>User Type</th>
              <th>Photo</th>
            </tr>
          </thead>
          <tbody>
            {employeeList.map((employee, index) => (
              <tr key={index}>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
                <td>{employee.occupation}</td>
                <td>{employee.salary}</td>
                <td>{employee.age}</td>
                <td>{employee.userType}</td>
                <td>
                  {employee.adminImage ? (
                    <img
                      src={`data:image/jpg;base64,${employee.adminImage}`}
                      alt="Employee"
                      width="50" height="50"
                    />
                  ) : (
                    'No Photo'
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No employees added yet.</p>
      )}
    </div>
  );
}

export default ViewEmployee;
