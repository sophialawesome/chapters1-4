import React, { useState, useEffect } from "react";
import EmployeeCard from "./EmployeeCard";
import EmployeeManager from "../../modules/EmployeeManager";

const EmployeeList = props => {
  // The initial state is an empty array
  const [employees, setEmployees] = useState([]);

  const getEmployees = () => {
    return EmployeeManager.getAll().then(employeesFromAPI => {
      setEmployees(employeesFromAPI);
    });
  };

  useEffect(() => {
    getEmployees();
  }, []);

  const deleteEmployee = id => {
  EmployeeManager.delete(id).then(() =>
      EmployeeManager.getAll().then(setEmployees)
    );
  };


 return (
    <>
    <section className="section-content">
    <button type="button"
        className="btn"
        onClick={() => props.history.push("/employees/new")}>
        Hire Employee
    </button>
  </section>
    <div className="container-cards">
      {employees.map(employee => 
        <EmployeeCard
          key={employee.id}
          employee={employee}
          deleteEmployee={deleteEmployee}
        />
      )}
    </div>
    </>
  );
};

export default EmployeeList;
