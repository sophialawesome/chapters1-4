import React from "react";
import "./Employee.css";

const EmployeeCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>Name: <span className="card-employeeName">
          {props.employee.name}
        </span></h3>
        <button type="button" onClick={() => props.deleteEmployee(props.employee.id)}>Fire</button>
      </div>
    </div>
  );
}

export default EmployeeCard;